package com.fit.nufit.food.dto.response;

import com.fit.nufit.food.domain.Food;
import com.fit.nufit.meal.domain.MealDetail;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class FoodSimpleResponse {

    private Long mealDetailId;
    private int foodCount;
    private String foodName;
    private double calorie;

    public FoodSimpleResponse(MealDetail mealDetail) {
        this(mealDetail.getId(), mealDetail.getFoodCount(), mealDetail.getFood().getName(), 10);
    }
}
