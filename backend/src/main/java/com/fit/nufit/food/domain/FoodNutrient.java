package com.fit.nufit.food.domain;

import com.fit.nufit.common.BaseEntity;
import com.fit.nufit.food.domain.Food;
import com.fit.nufit.food.domain.FoodType;
import com.fit.nufit.nutrient.domain.Nutrient;
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

    @Comment("영양소 ID")
    @OneToMany(mappedBy = "nutrient")
    private final List<Nutrient> nutrients = new ArrayList<>();

    @Comment("음식 ID")
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "food_id")
    private Food food;

    @Comment("음식 영양소 양")
    @Column(name = "food_nutrient_amount")
    private int amount;

    @Comment("음식 영양소 총 칼로리")
    @Column(name = "food_nutrient_total_calorie")
    private int totalCalorie;

    public FoodNutrient(Nutrient nutrient, int amount, int totalCalorie) {
        nutrients.add(nutrient);
        nutrient.changeFoodNutrient(this);
        this.amount = amount;
        this.totalCalorie = totalCalorie;
    }

    public void changeFood(Food food) {
        this.food = food;
    }
}
