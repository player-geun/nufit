package com.fit.nufit.food.domain;

import com.fit.nufit.common.BaseEntity;
import com.fit.nufit.food.domain.Food;
import com.fit.nufit.food.domain.FoodType;
import com.fit.nufit.nutrient.domain.Nutrient;
import com.sun.xml.bind.v2.TODO;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.aspectj.weaver.AjcMemberMaker;
import org.hibernate.annotations.Comment;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
public class FoodNutrient extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "food_nutrient_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "nutrient_id", nullable = false)
    private Nutrient nutrient;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "food_id", nullable = false)
    private Food food;

    @Column(name = "food_nutrient_amount")
    private int amount;

    @Column(name = "food_nutrient_total_calorie")
    private int totalCalorie;

    public FoodNutrient(Nutrient nutrient, int amount, int totalCalorie) {
        this.nutrient = nutrient;
        this.amount = amount;
        this.totalCalorie = totalCalorie;
    }


    //TODO: 칼로리 계산 추가하기
    public void changeFood(Food food) {
        this.food = food;
    }
}
