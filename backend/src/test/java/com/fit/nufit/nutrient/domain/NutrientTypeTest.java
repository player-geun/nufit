package com.fit.nufit.nutrient.domain;

import com.fit.nufit.nutrient.exception.NoSuchNutrientException;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThatThrownBy;

@SpringBootTest
class NutrientTypeTest {

    @Test
    public void 영양소_단위에_존재하지_않는_단위가_들어오면_예외가_발생한다() throws Exception {

        //given
        String nutrientUnit = "kg";
        //when & then
        assertThatThrownBy(() -> {
            NutrientUnit.from(nutrientUnit);
        })
                .isInstanceOf(NoSuchNutrientException.class)
                .hasMessage(String.format("%s는 존재하지 않는 영양소 단위입니다.", nutrientUnit));
    }
}
