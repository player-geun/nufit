package com.fit.nufit.auth.dto;

import com.fit.nufit.member.domain.Member;
import com.fit.nufit.member.domain.Role;
import com.fit.nufit.member.domain.SocialType;
import lombok.Getter;

import java.util.Map;

@Getter
public class OAuthAttributes {

    private String nameAttributeKey;
    private UserInfo userInfo;

    private OAuthAttributes(String nameAttributeKey, UserInfo userInfo) {
        this.nameAttributeKey = nameAttributeKey;
        this.userInfo = userInfo;
    }

    public static OAuthAttributes of(SocialType socialType,
                                     String userNameAttributeName,
                                     Map<String, Object> attributes) {
        if (socialType.isNaver()) {
            return new OAuthAttributes(userNameAttributeName, new NaverUserInfo(attributes));
        }
        return new OAuthAttributes(userNameAttributeName, new KakaoUserInfo(attributes));
    }

    public Member toMember(UserInfo userInfo) {
        return new Member(userInfo.getGender(), userInfo.getEmail());
    }
}
