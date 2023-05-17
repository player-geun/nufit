package com.fit.nufit.food.domain;

import com.fit.nufit.common.BaseEntity;
import com.fit.nufit.nutrient.domain.Nutrient;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
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
    private double amount;

    public FoodNutrient(Food food, Nutrient nutrient, double amount) {
        this.food = food;
        this.nutrient = nutrient;
        this.amount = amount;
    }

}
