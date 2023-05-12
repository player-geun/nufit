package com.fit.nufit.food.domain;

import com.fit.nufit.nutrient.domain.Nutrient;
import com.fit.nufit.nutrient.domain.NutrientRepository;
import com.fit.nufit.nutrient.domain.NutrientUnit;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import static org.assertj.core.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class FoodTest {

    @Autowired
    FoodRepository foodRepository;

    @Autowired
    FoodNutrientRepository foodNutrientRepository;

    @Autowired
    NutrientRepository nutrientRepository;

    @Test
    void 음식을_생성한다() throws Exception {

        //given

        //when & then
        assertDoesNotThrow(() -> {
            new Food("파스타", 1, "오뚜기", FoodType.from("brand"), 500);
        });
    }

    @Test
    @Transactional
    void 음식에_영양소를_추가한다() throws Exception {

        //given
        Food pasta = new Food("파스타", 1, "오뚜기", FoodType.from("brand"), 500);
        foodRepository.save(pasta);
        Nutrient vitamin = new Nutrient("비타민", 5, NutrientUnit.MCG);
        nutrientRepository.save(vitamin);
        FoodNutrient foodNutrient = new FoodNutrient(pasta, vitamin, 5, 25);
        foodNutrientRepository.save(foodNutrient);
        //when
        Food findFood = foodRepository.getById(pasta.getId());
        //then
        assertThat(foodNutrientRepository.getByFoodId(findFood.getId()).get(0)).isEqualTo(foodNutrient);
        assertThat(foodNutrientRepository.getByNutrientId(vitamin.getId()).get(0)).isEqualTo(foodNutrient);

    }

    @Test
    @Transactional
    void 음식의_영양소를_제거한다() throws Exception {

        //given
        Food pasta = new Food("파스타", 1, "오뚜기", FoodType.from("brand"), 500);
        foodRepository.save(pasta);
        Nutrient vitamin = new Nutrient("비타민", 5, NutrientUnit.MCG);
        nutrientRepository.save(vitamin);
        FoodNutrient foodNutrient = new FoodNutrient(pasta, vitamin, 5, 25);
        foodNutrientRepository.save(foodNutrient);
        //when
        foodNutrientRepository.delete(foodNutrient);
        Food findFood = foodRepository.getById(pasta.getId());

        //then
        assertThat(foodNutrientRepository.findByFoodId(findFood.getId()).size()).isEqualTo(0);
    }


}
