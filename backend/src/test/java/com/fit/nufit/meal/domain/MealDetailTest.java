package com.fit.nufit.meal.domain;

import com.fit.nufit.food.domain.Food;
import com.fit.nufit.food.domain.FoodType;
import com.fit.nufit.food.domain.FoodUnit;
import com.fit.nufit.member.domain.Member;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

class MealDetailTest {

    @Test
    void 식사를_생성한다() {
        //given
        Meal meal = new Meal(new Member("근우@gmail.com"), MealType.BREAKFAST);
        Food food = new Food("파스타", 1, FoodUnit.G, "오뚜기",
                FoodType.from("brand"), 500);

        //when & then
        assertDoesNotThrow(() -> {
            new MealDetail(meal, food, 1);
        });
    }

    @Test
    void 식단상세의_칼로리를_구한다() {
        // given
        Meal meal = new Meal(new Member("근우@gmail.com"), MealType.BREAKFAST);
        Food food = new Food("파스타", 1, FoodUnit.G, "오뚜기",
                FoodType.from("brand"), 500);
        MealDetail mealDetail = new MealDetail(meal, food, 3);

        // when
        int result = mealDetail.getCalorie();

        // then
        assertThat(result).isEqualTo((int) Math.round(food.getCalorie() * mealDetail.getFoodCount()));
    }

    @Test
    void 식단상세의_음식양을_구한다() {
        // given
        Meal meal = new Meal(new Member("근우@gmail.com"), MealType.BREAKFAST);
        Food food = new Food("파스타", 1, FoodUnit.G, "오뚜기",
                FoodType.from("brand"), 500);
        MealDetail mealDetail = new MealDetail(meal, food, 3);

        // when
        int result = mealDetail.getAmount();

        // then
        assertThat(result).isEqualTo(mealDetail.getFoodCount() * food.getAmount());
    }
}
