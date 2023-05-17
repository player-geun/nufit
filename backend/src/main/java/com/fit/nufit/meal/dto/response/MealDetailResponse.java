package com.fit.nufit.meal.dto.response;

import com.fit.nufit.meal.domain.MealDetail;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class MealDetailResponse {

    private Long id;
    private Long mealId;
    private Long foodId;
    private int foodCount;
    private int foodAmount;
    private int calorie;

    public MealDetailResponse(MealDetail mealDetail) {
        this(mealDetail.getId(),
                mealDetail.getMeal().getId(),
                mealDetail.getFood().getId(),
                mealDetail.getFoodCount(),
                mealDetail.getAmount(),
                mealDetail.getCalorie());
    }
}
