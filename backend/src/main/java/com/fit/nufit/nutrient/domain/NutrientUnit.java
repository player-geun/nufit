package com.fit.nufit.nutrient.domain;

import com.fit.nufit.nutrient.exception.NoSuchNutrientException;

public enum NutrientUnit {

    G, MG, MCG;

    public static NutrientUnit from(String value) {
        try {
            return NutrientUnit.valueOf(value.toUpperCase());
        } catch (IllegalArgumentException e) {
            throw new NoSuchNutrientException(
                    String.format("%s는 존재하지 않는 영양소 단위입니다.", value)
            );
        }
    }
}
