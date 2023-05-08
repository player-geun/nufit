package com.fit.nufit.meal.dto.request;

import com.fit.nufit.meal.domain.MealType;
import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.NotNull;

@AllArgsConstructor
@Getter
public class MealCreateRequest {

    @NotNull(message = "Null일 수 없습니다.")
    private MealType mealType;
}
