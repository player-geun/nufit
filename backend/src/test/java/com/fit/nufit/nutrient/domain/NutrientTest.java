package com.fit.nufit.nutrient.domain;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.test.annotation.Rollback;
import org.springframework.transaction.annotation.Transactional;

import static org.assertj.core.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class NutrientTest {

    @Autowired
    NutrientRepository nutrientRepository;

    @Test
    void 영양소를_생성한다() throws Exception {

        //given

        //when & then
        assertDoesNotThrow(()->{
            new Nutrient("탄수화물", 4, NutrientUnit.of("g"));
        });

    }

    @Test
    @Transactional
    void 영양소의_셀프_참조_관계를_생성한다() throws Exception {

        //given
        Nutrient vitamin = new Nutrient("비타민", 5, NutrientUnit.MCG);
        Nutrient vitaminA = new Nutrient("비타민A", 3, NutrientUnit.MCG);
        Nutrient vitaminB = new Nutrient("비타민B", 2, NutrientUnit.MCG);
        //when
        nutrientRepository.save(vitamin);
        nutrientRepository.save(vitaminA);
        nutrientRepository.save(vitaminB);
        vitaminA.setParentNutrient(vitamin);
        vitaminB.setParentNutrient(vitamin);
        Nutrient parentNutrient = nutrientRepository.getByName("비타민");
        Nutrient childNutrient = nutrientRepository.getByName("비타민A");

        //then
        assertThat(childNutrient.getParentNutrient()).isEqualTo(vitamin);
        assertThat(parentNutrient.getChildNutrients().size()).isEqualTo(2);
    }

    @Test
    @Transactional
    void 영양소의_셀프_참조_관계를_변경한다() throws Exception {
        //given
        Nutrient vitamin1 = new Nutrient("비타민1", 5, NutrientUnit.MCG);
        Nutrient vitamin2 = new Nutrient("비타민2", 5, NutrientUnit.MCG);
        Nutrient vitaminA = new Nutrient("비타민A", 3, NutrientUnit.MCG);
        Nutrient vitaminB = new Nutrient("비타민B", 2, NutrientUnit.MCG);
        //when
        nutrientRepository.save(vitamin1);
        nutrientRepository.save(vitamin2);
        nutrientRepository.save(vitaminA);
        nutrientRepository.save(vitaminB);
        vitaminA.setParentNutrient(vitamin1);
        vitaminB.setParentNutrient(vitamin1);
        vitaminA.setParentNutrient(vitamin2);
        Nutrient childNutrientA = nutrientRepository.getByName("비타민A");
        Nutrient childNutrientB = nutrientRepository.getByName("비타민B");
        //then
        assertThat(childNutrientA.getParentNutrient()).isEqualTo(vitamin2);
        assertThat(childNutrientB.getParentNutrient()).isEqualTo(vitamin1);
    }

}
