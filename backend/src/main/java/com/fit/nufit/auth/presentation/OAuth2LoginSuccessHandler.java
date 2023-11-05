package com.fit.nufit.auth.presentation;

import com.fit.nufit.auth.application.JwtProvider;
import com.fit.nufit.auth.domain.CustomOAuth2User;
import com.fit.nufit.member.application.MemberService;
import com.fit.nufit.member.dto.response.MemberResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RequiredArgsConstructor
@Component
public class OAuth2LoginSuccessHandler implements AuthenticationSuccessHandler {

    private static final String FRONT_URL = "http://localhost:19000";
    private static final String BEARER = "Bearer ";

    private final JwtProvider jwtProvider;
    private final MemberService memberService;

    @Value("${jwt.access.header}")
    private String accessHeader;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request,
                                        HttpServletResponse response,
                                        Authentication authentication) throws IOException {
        CustomOAuth2User oAuth2User = (CustomOAuth2User) authentication.getPrincipal();
        Long id = oAuth2User.getId();
        MemberResponse member = memberService.findById(id);
        if (member.getWeight() == 0) {
            String accessToken = jwtProvider.createAccessToken(String.valueOf(id));
            System.out.println("==================");
            System.out.println(request.getRequestURL());
            System.out.println(request.getRequestURI());
            System.out.println("==================");
            setHeadersWithTokens(response, accessToken);
            response.sendRedirect(FRONT_URL + "/login?token=" + BEARER + accessToken);
            return;
        }

        String accessToken = jwtProvider.createAccessToken(String.valueOf(id));
        setHeadersWithTokens(response, accessToken);
        response.sendRedirect(FRONT_URL);
    }

    private void setHeadersWithTokens(HttpServletResponse response, String accessToken) {
        response.setStatus(HttpServletResponse.SC_OK);
        response.setHeader(accessHeader, BEARER + accessToken);
    }
}
