package com.fit.nufit.meal.dto;

import com.fit.nufit.meal.domain.Meal;
import com.fit.nufit.meal.domain.MealType;
import lombok.Getter;

@Getter
public class MealResponse {

    private Long id;
    private MealType type;

    public MealResponse(Long id, MealType type) {
        this.id = id;
        this.type = type;
    }

    public MealResponse(Meal meal) {
        this(meal.getId(), meal.getType());
    }
}
