package com.fit.nufit.meal.dto.response;

import com.fit.nufit.food.dto.response.FoodSimpleResponse;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class MealDetailsResponse {

    private Long id;
    private int calorieTotal;
    private List<FoodSimpleResponse> foodSimpleResponses;

    public MealDetailsResponse(Long id, double calorieTotal, List<FoodSimpleResponse> foodSimpleResponses) {
        this.id = id;
        this.calorieTotal = (int) Math.round(calorieTotal);
        this.foodSimpleResponses = foodSimpleResponses;
    }
}
