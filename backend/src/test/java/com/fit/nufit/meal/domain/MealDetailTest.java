package com.fit.nufit.meal.domain;

import com.fit.nufit.food.domain.Food;
import com.fit.nufit.food.domain.FoodRepository;
import com.fit.nufit.food.domain.FoodType;
import com.fit.nufit.meal.application.MealDetailService;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class MealDetailTest {

    @Autowired
    MealRepository mealRepository;

    @Autowired
    FoodRepository foodRepository;

    @Autowired
    MealDetailRepository mealDetailRepository;

    @Autowired
    MealDetailService mealDetailService;

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

    @Test
    @Transactional
    void 식사에서_음식을_삭제한다() {
        // given
        Meal meal = new Meal(MealType.BREAKFAST);
        mealRepository.save(meal);
        Food pasta = new Food("파스타", 1, "오뚜기", FoodType.from("brand"), 500);
        Food pizza = new Food("피자", 1, "오뚜기", FoodType.from("brand"), 500);
        foodRepository.save(pasta);
        foodRepository.save(pizza);
        MealDetail mealDetail = new MealDetail(1L, meal, pasta, 1, 1.0);
        MealDetail mealDetail2 = new MealDetail(2L, meal, pizza, 1, 1.0);
        mealDetailRepository.save(mealDetail);
        mealDetailRepository.save(mealDetail2);

        // when
        mealDetailService.deleteAllById(List.of(1L));

        // then
        Assertions.assertThat(mealDetailRepository.findByMealId(meal.getId()).size()).isEqualTo(1);
    }

}
