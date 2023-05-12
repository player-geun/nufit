package com.fit.nufit.meal.domain;

import com.fit.nufit.food.domain.Food;
import com.fit.nufit.food.domain.FoodType;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class MealDetailTest {

    @Test
    void 식사를_생성한다() {
        //given
        Meal meal = new Meal(MealType.BREAKFAST);
        Food food = new Food("파스타", 1, "오뚜기",
                FoodType.from("brand"), 500);

        //when & then
        assertDoesNotThrow(() -> {
            new MealDetail(meal, food, 1, 10);
        });
    }
}
