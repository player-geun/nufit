package com.fit.nufit.meal.domain;

import com.fit.nufit.meal.exception.NoSuchMealException;

public enum MealType {
    BREAKFAST, LUNCH, DINNER, SNACK;

    public static MealType of(String value) {
        try {
            return MealType.valueOf(value.toUpperCase());
        } catch (IllegalArgumentException e) {
            throw new NoSuchMealException(
                    String.format("%s는 존재하지 않는 식사 타입입니다.", value)
            );
        }
    }
}
