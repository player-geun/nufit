package com.fit.nufit.meal.domain;

import com.fit.nufit.member.domain.Member;
import com.fit.nufit.member.domain.Role;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class MealTest {

    @Test
    void 식사를_생성한다() {
        //given

        //when & then
        assertDoesNotThrow(() -> {
            new Meal(
                    new Member("이근우", "geunwoo.dev@gmail.com", "1", Role.USER),
                    MealType.BREAKFAST);
        });
    }
}
