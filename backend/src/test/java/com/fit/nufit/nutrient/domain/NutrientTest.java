package com.fit.nufit.nutrient.domain;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class NutrientTest {

    @Test
    void 영양소를_생성한다() throws Exception {

        //given

        //when & then
        assertDoesNotThrow(()->{
            new Nutrient("탄수화물", 4, NutrientUnit.from("g"));
        });

    }
}
