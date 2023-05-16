package com.fit.nufit.meal.domain;

import com.fit.nufit.common.BaseEntity;
import com.fit.nufit.member.domain.Member;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
public class Meal extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "meal_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id", nullable = false)
    private Member member;

    @Enumerated(value = EnumType.STRING)
    @Column(nullable = false)
    private MealType type;

    public Meal(MealType type) {
        this.type = type;
    }

    public void change(MealType type) {
        this.type = type;
    }
}
