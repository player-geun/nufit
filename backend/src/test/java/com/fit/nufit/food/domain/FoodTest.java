package com.fit.nufit.food.domain;

import com.fit.nufit.nutrient.domain.Nutrient;
import com.fit.nufit.nutrient.domain.NutrientUnit;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class FoodTest {

    @Test
    void 음식을_생성한다() throws Exception {

        //given

        //when & then
        assertDoesNotThrow(()->{
            new Food("파스타", 1, "오뚜기", FoodType.from("brand"), 500);
        });
    }

    @Test
    void 음식과_영양소를_생성하고_음식에_음식_영양소를_추가한다() throws Exception {
        //given
        Food pasta = new Food("파스타", 1, "오뚜기", FoodType.from("brand"), 500);
        Nutrient vitamin = new Nutrient("비타민", 5, NutrientUnit.MCG);
        //when
        FoodNutrient foodNutrient = pasta.addFoodNutrient(new FoodNutrient(vitamin, 5, 25));
        //then
        assertThat(pasta.getFoodNutrients().get(0)).isEqualTo(foodNutrient);
        assertThat(vitamin.getFoodNutrients().get(0)).isEqualTo(foodNutrient);
    }

    @Test
    void 음식과_영양소를_생성하고_음식에_음식_영양소를_추가하고_제거한다() throws Exception {
        //given
        Food pasta = new Food("파스타", 1, "오뚜기", FoodType.from("brand"), 500);
        Nutrient vitamin = new Nutrient("비타민", 5, NutrientUnit.MCG);
        //when
        FoodNutrient foodNutrient = pasta.addFoodNutrient(new FoodNutrient(vitamin, 5, 25));
        pasta.deleteFoodNutrient(foodNutrient);
        //then
        assertThat(pasta.getFoodNutrients().size()).isEqualTo(0);
        assertThat(vitamin.getFoodNutrients().size()).isEqualTo(0);
    }

}
