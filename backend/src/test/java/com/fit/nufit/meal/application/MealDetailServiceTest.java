package com.fit.nufit.meal.application;

import com.fit.nufit.food.domain.Food;
import com.fit.nufit.food.domain.FoodRepository;
import com.fit.nufit.food.domain.FoodType;
import com.fit.nufit.meal.domain.Meal;
import com.fit.nufit.meal.domain.MealRepository;
import com.fit.nufit.meal.domain.MealType;
import com.fit.nufit.meal.dto.request.MealDetailCreateRequest;
import com.fit.nufit.meal.dto.response.MealDetailsResponse;
import com.fit.nufit.member.domain.Member;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class MealDetailServiceTest {

    @Autowired
    private MealDetailService mealDetailService;

    @Autowired
    private MealRepository mealRepository;

    @Autowired
    private FoodRepository foodRepository;

    @Test
    void 식사에_해당하는_음식을_조회한다() {
        // given
        Meal meal = mealRepository.save(new Meal(new Member("근우@gmail.com"), MealType.BREAKFAST));
        Food food = foodRepository.save(new Food("사과", 1, "NO", FoodType.BRAND, 1));
        mealDetailService.save(new MealDetailCreateRequest(meal.getId(), food.getId()));

        // when
        MealDetailsResponse mealDetailsResponse = mealDetailService.findAllByMealId(meal.getId());

        // then
        assertThat(mealDetailsResponse.getFoodSimpleResponses().get(0).getFoodName()).isEqualTo("사과");
    }
}
