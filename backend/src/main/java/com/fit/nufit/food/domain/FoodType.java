package com.fit.nufit.food.domain;

import com.fit.nufit.food.exception.NoSuchFoodException;
import com.fit.nufit.meal.exception.NoSuchMealException;

public enum FoodType {

    NORMAL, BRAND;

    public static FoodType from(String value) {
        try {
            return FoodType.valueOf(value.toUpperCase());
        } catch (IllegalArgumentException e) {
            throw new NoSuchFoodException(
                    String.format("%s는 존재하지 않는 음식 타입입니다.", value)
            );
        }
    }
}
