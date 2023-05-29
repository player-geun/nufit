package com.fit.nufit.member.domain;

import com.fit.nufit.meal.domain.MealType;
import com.fit.nufit.member.exception.NoSuchMemberException;

public enum ActivityAmount {
    LOWER, MIDDLE, UPPER;

    public static MealType from(String value) {
        try {
            return MealType.valueOf(value.toUpperCase());
        } catch (IllegalArgumentException e) {
            throw new NoSuchMemberException(
                    String.format("%s는 존재하지 않는 활동량입니다.", value)
            );
        }
    }
}
