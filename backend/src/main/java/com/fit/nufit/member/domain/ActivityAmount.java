package com.fit.nufit.member.domain;

import com.fit.nufit.meal.domain.MealType;
import com.fit.nufit.member.exception.NoSuchMemberException;

public enum ActivityAmount {
    LOWER(25), MIDDLE(35), UPPER(40);

    private int value;

    ActivityAmount(int value) {
        this.value = value;
    }

    public static ActivityAmount from(String value) {
        try {
            return ActivityAmount.valueOf(value.toUpperCase());
        } catch (IllegalArgumentException e) {
            throw new NoSuchMemberException(
                    String.format("%s는 존재하지 않는 활동량입니다.", value)
            );
        }
    }

    public double calculateGoalCalorie(double averageWeight) {
        return averageWeight * value;
    }
}
