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

    @OneToMany(mappedBy = "food")
    private List<FoodNutrient> foodNutrients = new ArrayList<>();

    @Column(name = "food_name")
    private String name;

    @Column(name = "food_brand")
    private String brand;

    @Column(name = "food_amount")
    private int amount;

    @Enumerated(value = EnumType.STRING)
    @Column(name = "food_type", nullable = false)
    private FoodType type;

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
        foodNutrient.changeFood(this);
        foodNutrients.add(foodNutrient);
        return foodNutrient;
    }

    public void deleteFoodNutrient(FoodNutrient foodNutrient) {
        foodNutrients.remove(foodNutrient);
    }
}
