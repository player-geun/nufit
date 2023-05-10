package com.fit.nufit.meal.dto.response;

import com.fit.nufit.food.dto.FoodSimpleResponse;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@AllArgsConstructor
@Getter
public class MealDetailsResponse {

    private Long id;
    private List<FoodSimpleResponse> foodSimpleResponses;
}
