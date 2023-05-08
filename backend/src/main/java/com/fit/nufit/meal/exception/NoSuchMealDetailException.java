package com.fit.nufit.meal.exception;

public class NoSuchMealDetailException extends RuntimeException {

    public NoSuchMealDetailException(String message) {
        super(message);
    }

    public NoSuchMealDetailException() {
        this("존재하지 않는 식사 상세입니다.");
    }
}
