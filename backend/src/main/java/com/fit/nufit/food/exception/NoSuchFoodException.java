package com.fit.nufit.food.exception;

public class NoSuchFoodException extends RuntimeException {

    public NoSuchFoodException(String message) {
        super(message);
    }

    public NoSuchFoodException() {
        this("존재하지 않는 음식입니다.");
    }
}
