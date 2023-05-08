package com.fit.nufit.meal.dto.response;

import com.fit.nufit.meal.domain.Meal;
import com.fit.nufit.meal.domain.MealType;
import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class MealResponse {

    private Long id;
    private MealType type;

    public MealResponse(Meal meal) {
        this(meal.getId(), meal.getType());
    }
}
