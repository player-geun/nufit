package com.fit.nufit.member.domain;

import com.fit.nufit.meal.domain.MealType;
import com.fit.nufit.member.exception.NoSuchMemberException;

public enum Sex {
    MAN, WOMAN;

    public static Sex from(String value) {
        try {
            return Sex.valueOf(value.toUpperCase());
        } catch (IllegalArgumentException e) {
            throw new NoSuchMemberException(
                    String.format("%s는 존재하지 않는 성별입니다.", value)
            );
        }
    }
}
