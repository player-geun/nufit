package com.fit.nufit.global.config;

import com.fit.nufit.auth.application.CustomOAuth2UserService;
import com.fit.nufit.auth.application.JwtProvider;
import com.fit.nufit.auth.presentation.JwtAuthenticationFilter;
import com.fit.nufit.auth.presentation.OAuth2LoginFailureHandler;
import com.fit.nufit.auth.presentation.OAuth2LoginSuccessHandler;
import com.fit.nufit.member.application.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.annotation.web.configurers.HeadersConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.logout.LogoutFilter;

@RequiredArgsConstructor
@EnableWebSecurity
public class WebSecurityConfig {

    private final OAuth2LoginSuccessHandler oAuth2LoginSuccessHandler;
    private final OAuth2LoginFailureHandler oAuth2LoginFailureHandler;
    private final CustomOAuth2UserService customOAuth2UserService;
    private final JwtProvider jwtProvider;
    private final MemberService memberService;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .formLogin(AbstractHttpConfigurer::disable)
                .httpBasic(AbstractHttpConfigurer::disable)
                .csrf(AbstractHttpConfigurer::disable)
                .headers(headers -> headers.frameOptions(HeadersConfigurer.FrameOptionsConfig::disable));

        http
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));

        http
                .authorizeHttpRequests(request -> {request
                        .antMatchers("/", "/auth/**", "/oauth2/**", "/swagger-ui/**", "/api-docs/**").permitAll()
                        .anyRequest().authenticated();
                });

        http
                .oauth2Login(oauth2 -> {oauth2
                        .successHandler(oAuth2LoginSuccessHandler)
                        .failureHandler(oAuth2LoginFailureHandler)
                        .redirectionEndpoint(endpoint -> endpoint.baseUri("/oauth2/callback/*"))
                        .authorizationEndpoint(endpoint -> endpoint.baseUri("/auth/authorize"))
                        .userInfoEndpoint(endpoint -> endpoint.userService(customOAuth2UserService));
                });

        http
                .addFilterAfter(jwtAuthenticationProcessingFilter(), LogoutFilter.class);

        http
                .cors(httpSecurityCorsConfigurer -> {});

        return http.build();
    }

    @Bean
    public JwtAuthenticationFilter jwtAuthenticationProcessingFilter() {
        return new JwtAuthenticationFilter(jwtProvider, memberService);
    }
}
