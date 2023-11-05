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

    private String name;

    @Column(nullable = false)
    private String email;

    @Enumerated(EnumType.STRING)
    private Role role;

    private String gender;

    private int age;

    private int height;

    private int weight;

    private ActivityAmount activityAmount;

    @Enumerated(EnumType.STRING)
    private SocialType socialType;

    private String socialId;

    public Member(String gender, String email) {
        this.gender = gender;
        this.email = email;
    }

    public  Member(String name, String email, Role role, SocialType socialType, String socialId) {
        this(name, email, role, "M", 0, 0, 0, ActivityAmount.LOWER, socialType, socialId);
    }

    public Member(String name, String email, Role role, String gender, int age, int height, int weight,
                  ActivityAmount activityAmount, SocialType socialType, String socialId) {
        this.name = name;
        this.email = email;
        this.role = role;
        this.gender = gender;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.activityAmount = activityAmount;
        this.socialType = socialType;
        this.socialId = socialId;
    }

    public void changeDetail(String gender, int age, int height, int weight, ActivityAmount activityAmount) {
        this.gender = gender;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.activityAmount = activityAmount;
    }

    public int calculateGoalCalorie() {
        double averageWeight = (height - 100) * 0.9;
        return (int) Math.round(activityAmount.calculateGoalCalorie(averageWeight));
    }

    public int calculateGoalCarbohydrate() {
        return (int) Math.round(calculateGoalCalorie() * 0.5);
    }

    public int calculateGoalProtein() {
        return (int) Math.round(calculateGoalCalorie() * 0.3);
    }

    public int calculateGoalFat() {
        return (int) Math.round(calculateGoalCalorie() * 0.2);
    }
}
