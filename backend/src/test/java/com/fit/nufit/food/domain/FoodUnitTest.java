package com.fit.nufit.food.domain;

import com.fit.nufit.food.exception.NoSuchFoodException;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThatThrownBy;

@SpringBootTest
class FoodUnitTest {

    @Test
    public void 음식_타입에_존재하지_않는_단위가_들어오면_예외가_발생한다() throws Exception {

        // given
        String foodUnit = "kg";
        // when & then
        assertThatThrownBy(() -> {
            FoodUnit.from(foodUnit);
        })
                .isInstanceOf(NoSuchFoodException.class)
                .hasMessage(String.format("%s는 존재하지 않는 음식 단위입니다.", foodUnit));
    }
}
