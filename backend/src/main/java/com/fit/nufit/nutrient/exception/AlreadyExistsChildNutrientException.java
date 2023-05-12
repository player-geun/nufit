package com.fit.nufit.nutrient.exception;

public class AlreadyExistsChildNutrientException extends RuntimeException {

    public AlreadyExistsChildNutrientException(String message) {
        super(message);
    }

    public AlreadyExistsChildNutrientException() {
        this("이미 존재하는 영양소입니다.");
    }

}
