package com.fit.nufit.meal.dto.response;

import com.fit.nufit.meal.domain.Meal;
import com.fit.nufit.meal.domain.MealType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class MealResponse {

    private Long id;
    private Long memberId;
    private MealType type;

    public MealResponse(Meal meal) {
        this(meal.getId(), meal.getMember().getId(), meal.getType());
    }
}
