package com.fit.nufit.food.dto.response;

import com.fit.nufit.food.domain.Food;
import com.fit.nufit.food.domain.FoodType;
import lombok.*;

@AllArgsConstructor
@Getter
public class FoodResponse {

    private Long id;
    private String name;
    private String brand;
    private int amount;
    private FoodType type;
    private int calorie;

    public FoodResponse(Food food) {
        this.name = food.getName();
        this.brand = food.getBrand();
        this.amount = food.getAmount();
        this.type = food.getType();
        this.calorie = (int)Math.round(food.getCalorie());
    }
}
