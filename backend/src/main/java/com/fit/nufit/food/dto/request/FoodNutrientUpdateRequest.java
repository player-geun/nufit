package com.fit.nufit.food.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class FoodNutrientUpdateRequest {

    private Long foodId;
    private List<FoodNutrientCreateRequest> nutrients;
}
