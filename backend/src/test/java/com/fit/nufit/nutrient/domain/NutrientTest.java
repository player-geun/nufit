package com.fit.nufit.nutrient.domain;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.*;
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

    @Test
    void 영양소의_셀프_참조_관계를_생성한다() throws Exception {
        //given
        Nutrient vitamin = new Nutrient("비타민", 5, NutrientUnit.MCG);
        Nutrient vitaminA = new Nutrient("비타민A", 3, NutrientUnit.MCG);
        Nutrient vitaminB = new Nutrient("비타민B", 2, NutrientUnit.MCG);
        //when
        vitamin.addChildNutrient(vitaminA);
        vitamin.addChildNutrient(vitaminB);
        //then
        assertThat(vitaminA.getParentNutrient()).isEqualTo(vitamin);
        assertThat(vitaminB.getParentNutrient()).isEqualTo(vitamin);
        assertThat(vitamin.getChildNutrients().size()).isEqualTo(2);
    }
    @Test
    void 영양소의_셀프_참조_관계를_제거한다() throws Exception {
        //given
        Nutrient vitamin = new Nutrient("비타민", 5, NutrientUnit.MCG);
        Nutrient vitaminA = new Nutrient("비타민A", 3, NutrientUnit.MCG);
        Nutrient vitaminB = new Nutrient("비타민B", 2, NutrientUnit.MCG);
        //when
        vitamin.addChildNutrient(vitaminA);
        vitamin.addChildNutrient(vitaminB);
        vitamin.deleteChildNutrient(vitaminA);
        //then
        assertThat(vitaminA.getParentNutrient()).isNull();
        assertThat(vitaminB.getParentNutrient()).isEqualTo(vitamin);
        assertThat(vitamin.getChildNutrients().size()).isEqualTo(1);
    }

}
