package com.fit.nufit.food.domain;

import com.fit.nufit.food.exception.NoSuchFoodException;

public enum FoodUnit {

    G, ML;

    public static FoodUnit from(String value) {
        try {
            return FoodUnit.valueOf(value.toUpperCase());
        } catch (IllegalArgumentException e) {
            throw new NoSuchFoodException(
                    String.format("%s는 존재하지 않는 음식 단위입니다.", value)
            );
        }
    }
}
