package com.fit.nufit.meal.domain;

import com.fit.nufit.common.BaseEntity;
import com.fit.nufit.food.domain.Food;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Table(name = "meal_detail")
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
public class MealDetail extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "meal_detail_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "meal_id", nullable = false)
    private Meal meal;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "food_id", nullable = false)
    private Food food;

    @Column(name = "food_count", nullable = false)
    private int foodCount;

    @Column(name = "total_calorie", nullable = false)
    private double calorieTotal;

    public MealDetail(Meal meal, Food food, int foodCount, double calorieTotal) {
        this.meal = meal;
        this.food = food;
        this.foodCount = foodCount;
        this.calorieTotal = calorieTotal;
    }

    public void change(Meal meal, Food food, int foodCount, double totalCalorie) {
        this.meal = meal;
        this.food = food;
        this.foodCount = foodCount;
        this.calorieTotal = totalCalorie;
    }
}
