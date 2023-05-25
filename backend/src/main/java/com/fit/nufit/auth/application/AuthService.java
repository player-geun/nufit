package com.fit.nufit.auth.application;

import com.fit.nufit.auth.domain.KakaoUser;
import com.fit.nufit.member.domain.Member;
import com.fit.nufit.member.domain.MemberRepository;
import com.fit.nufit.member.domain.Role;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserService;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.Map;

@RequiredArgsConstructor
@Service
public class AuthService implements OAuth2UserService<OAuth2UserRequest, OAuth2User> {

    private final MemberRepository memberRepository;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2UserService<OAuth2UserRequest, OAuth2User> delegate = new DefaultOAuth2UserService();
        OAuth2User oAuth2User = delegate.loadUser(userRequest);

        String userNameAttributeName = userRequest.getClientRegistration().getProviderDetails()
                .getUserInfoEndpoint().getUserNameAttributeName();
        Map<String, Object> attributes = oAuth2User.getAttributes();

        KakaoUser kakaoUser = new KakaoUser(attributes);
        Member member = getMember(kakaoUser);

        return new DefaultOAuth2User(
                Collections.singleton(new SimpleGrantedAuthority(member.getRole().getKey())),
                oAuth2User.getAttributes(),
                userNameAttributeName
        );
    }

    private Member getMember(KakaoUser kakaoUser) {
        Member member = memberRepository
                .findBySocialId(kakaoUser.getId()).orElse(null);

        if (member == null) {
            return saveMember(kakaoUser);
        }
        return member;
    }

    private Member saveMember(KakaoUser kakaoUser) {
        Member member = kakaoUser.toEntity(Role.USER);
        return memberRepository.save(member);
    }
}
