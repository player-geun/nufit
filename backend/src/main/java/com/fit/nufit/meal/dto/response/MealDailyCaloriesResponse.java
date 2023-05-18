package com.fit.nufit.meal.dto.response;

import com.fit.nufit.meal.domain.MealType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.Map;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class MealDailyCaloriesResponse {

    private Long memberId;
    private Map<MealType, Integer> calories;
}
