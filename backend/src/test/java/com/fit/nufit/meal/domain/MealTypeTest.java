package com.fit.nufit.meal.domain;

import com.fit.nufit.meal.exception.NoSuchMealException;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.*;

class MealTypeTest {

    @Test
    void 식사_타입에_존재하지_않는_타입이_들어오면_예외가_발생한다() {
        //given
        String type = "DDD";

        //when & then
        assertThatThrownBy(() -> {
            MealType.of(type);
        })
                .isInstanceOf(NoSuchMealException.class)
                .hasMessage(String.format("%s는 존재하지 않는 식사 타입입니다.", type));
    }
}
