package com.fit.nufit.meal.exception;

public class NoSuchMealException extends RuntimeException {

    public NoSuchMealException(String message) {
        super(message);
    }

    public NoSuchMealException() {
        this("존재하지 않는 식사입니다.");
    }
}
