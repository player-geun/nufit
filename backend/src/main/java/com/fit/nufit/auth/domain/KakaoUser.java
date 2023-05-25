package com.fit.nufit.auth.domain;

import com.fit.nufit.member.domain.Member;
import com.fit.nufit.member.domain.Role;
import lombok.AllArgsConstructor;

import java.util.Map;

@AllArgsConstructor
public class KakaoUser {

    private Map<String, Object> attributes;

    public Member toEntity(Role role) {
        return new Member(getNickname(), getEmail(), getId(), role);
    }

    public String getId() {
        return String.valueOf(attributes.get("id"));
    }

    public String getNickname() {
        Map<String, Object> account = (Map<String, Object>) attributes.get("kakao_account");
        Map<String, Object> profile = (Map<String, Object>) account.get("profile");

        if (account == null || profile == null) {
            return null;
        }

        return (String) profile.get("nickname");
    }

    public String getEmail() {
        Map<String, Object> account = (Map<String, Object>) attributes.get("kakao_account");

        if (account == null) {
            return null;
        }

        return (String) account.get("email");
    }
}
