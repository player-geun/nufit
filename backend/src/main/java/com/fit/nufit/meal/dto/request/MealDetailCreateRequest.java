package com.fit.nufit.meal.dto.request;

import com.fit.nufit.meal.domain.MealDetail;
import com.fit.nufit.meal.domain.MealType;
import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.NotNull;

@AllArgsConstructor
@Getter
public class MealDetailCreateRequest {

    @NotNull(message = "Null일 수 없습니다.")
    private Long mealId;

    @NotNull(message = "Null일 수 없습니다.")
    private Long foodId;
}
