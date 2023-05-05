package com.fit.nufit.food.domain;

import com.fit.nufit.common.BaseEntity;
import com.fit.nufit.meal.domain.MealType;
import lombok.*;
import net.bytebuddy.implementation.bind.annotation.BindingPriority;
import org.hibernate.annotations.Comment;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
public class Food extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "food_id")
    private Long id;

    @Comment("음식 영양소 ID")
    @OneToMany(mappedBy = "food_nutrient_id")
    private final List<FoodNutrient> foodNutrients = new ArrayList<>();

    @Comment("음식 이름")
    @Column(name = "food_name")
    private String name;

    @Comment("음식 브랜드")
    @Column(name = "food_brand")
    private String brand;

    @Comment("음식 양")
    @Column(name = "food_amount")
    private int amount;

    @Comment("음식 타입")
    @Enumerated(value = EnumType.STRING)
    @Column(name = "food_type", nullable = false)
    private FoodType type;

    @Comment("음식 총 칼로리")
    @Column(name = "food_total_calorie")
    private int total_calorie;

    public Food(String name, int amount, String brand, FoodType foodType, int total_calorie) {
        this.name = name;
        this.brand = brand;
        this.amount = amount;
        this.type = foodType;
        this.total_calorie = total_calorie;
    }

    public FoodNutrient addFoodNutrient(FoodNutrient foodNutrient) {
        foodNutrients.add(foodNutrient);
        foodNutrient.changeFood(this);
        return foodNutrient;
    }
}
