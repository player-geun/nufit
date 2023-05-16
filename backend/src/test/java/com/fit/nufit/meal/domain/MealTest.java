package com.fit.nufit.meal.domain;

import com.fit.nufit.member.domain.Member;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class MealTest {

    @Test
    void 식사를_생성한다() {
        //given

        //when & then
        assertDoesNotThrow(() -> {
            new Meal(new Member("근우@gmail.com"), MealType.BREAKFAST);
        });
    }
}
