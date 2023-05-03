package com.fit.nufit.food.dto;

import com.fit.nufit.food.domain.Food;
import com.fit.nufit.food.domain.FoodType;
import lombok.*;
import org.hibernate.annotations.Comment;

import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

@Getter
@AllArgsConstructor
public class FoodResponse {

    private Long id;
    private String name;
    private String brand;
    private int amount;
    private FoodType type;
    private int total_calorie;

    public FoodResponse(Food food) {
        this.name = food.getName();
        this.brand = food.getBrand();
        this.amount = food.getAmount();
        this.type = food.getType();
        this.total_calorie = food.getTotal_calorie();
    }
}
