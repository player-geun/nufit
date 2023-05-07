package com.fit.nufit.food.domain;

import com.fit.nufit.nutrient.domain.Nutrient;
import com.fit.nufit.nutrient.domain.NutrientRepository;
import com.fit.nufit.nutrient.domain.NutrientUnit;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.test.annotation.Rollback;
import org.springframework.transaction.annotation.Transactional;

import static org.assertj.core.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@EnableJpaAuditing
class FoodTest {

    @Autowired
    FoodRepository foodRepository;

    @Autowired
    NutrientRepository nutrientRepository;

    @Test
    void 음식을_생성한다() throws Exception {

        //given

        //when & then
        assertDoesNotThrow(()->{
            new Food("파스타", 1, "오뚜기", FoodType.of("brand"), 500);
        });
    }

    @Test
    @Transactional
    void 음식과_영양소를_생성하고_음식에_음식_영양소를_추가한다() throws Exception {

        //given
        Food pasta = new Food("파스타", 1, "오뚜기", FoodType.of("brand"), 500);
        foodRepository.save(pasta);
        Nutrient vitamin = new Nutrient("비타민", 5, NutrientUnit.MCG);
        nutrientRepository.save(vitamin);
        //when
        FoodNutrient foodNutrient = pasta.addFoodNutrient(new FoodNutrient(vitamin, 5, 25));
        Food findFood = foodRepository.getByName("파스타");
        //then
        assertThat(findFood.getFoodNutrients().get(0)).isEqualTo(foodNutrient);
        assertThat(findFood.getFoodNutrients().get(0).getNutrient()).isEqualTo(vitamin);

    }

    @Test
    @Transactional
    void 음식과_영양소를_생성하고_음식에_음식_영양소를_추가하고_제거한다() throws Exception {

        //given
        Food pasta = new Food("파스타", 1, "오뚜기", FoodType.of("brand"), 500);
        foodRepository.save(pasta);
        Nutrient vitamin = new Nutrient("비타민", 5, NutrientUnit.MCG);
        nutrientRepository.save(vitamin);
        //when
        FoodNutrient foodNutrient = pasta.addFoodNutrient(new FoodNutrient(vitamin, 5, 25));
        pasta.deleteFoodNutrient(foodNutrient);
        Food findFood = foodRepository.getByName("파스타");
        //then
        assertThat(findFood.getFoodNutrients().size()).isEqualTo(0);
    }

}
