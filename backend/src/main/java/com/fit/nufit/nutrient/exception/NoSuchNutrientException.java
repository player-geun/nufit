package com.fit.nufit.nutrient.exception;

public class NoSuchNutrientException extends RuntimeException {

    public NoSuchNutrientException(String message) {
        super(message);
    }

    public NoSuchNutrientException() {
        this("존재하지 않는 영양소입니다.");
    }
}
