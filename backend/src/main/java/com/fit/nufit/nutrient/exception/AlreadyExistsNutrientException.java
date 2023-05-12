package com.fit.nufit.nutrient.exception;

public class AlreadyExistsNutrientException extends RuntimeException {

    public AlreadyExistsNutrientException(String message) {
        super(message);
    }

    public AlreadyExistsNutrientException() {
        this("이미 존재하는 영양소입니다.");
    }

}
