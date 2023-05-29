package com.fit.nufit.member.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id")
    private Long id;

    @Column(nullable = false)
    private String nickname;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String socialId;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Role role;

    @Enumerated(EnumType.STRING)
    private Sex sex;

    private int age;

    private int height;

    private int weight;

    public Member(String nickname, String email, String socialId, Role role) {
        this(nickname, email, socialId, role, Sex.MAN, 0, 0, 0);
    }

    public Member(String nickname, String email, String socialId, Role role,
                  Sex sex, int age, int height, int weight) {
        this.nickname = nickname;
        this.email = email;
        this.socialId = socialId;
        this.role = role;
        this.sex = sex;
        this.age = age;
        this.height = height;
        this.weight = weight;
    }

    public void changeDetail(Sex sex, int age, int height, int weight) {
        this.sex = sex;
        this.age = age;
        this.height = height;
        this.weight = weight;
    }
}
