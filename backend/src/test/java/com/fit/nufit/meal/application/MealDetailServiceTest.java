package com.fit.nufit.meal.application;

import com.fit.nufit.food.domain.Food;
import com.fit.nufit.food.domain.FoodRepository;
import com.fit.nufit.food.domain.FoodType;
import com.fit.nufit.food.domain.FoodUnit;
import com.fit.nufit.meal.domain.Meal;
import com.fit.nufit.meal.domain.MealRepository;
import com.fit.nufit.meal.domain.MealType;
import com.fit.nufit.meal.dto.request.MealDetailCreateRequest;
import com.fit.nufit.meal.dto.response.MealDetailResponse;
import com.fit.nufit.meal.dto.response.MealDetailsResponse;
import com.fit.nufit.meal.exception.NoSuchMealDetailException;
import com.fit.nufit.member.domain.Member;
import com.fit.nufit.member.domain.MemberRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

@SpringBootTest
class MealDetailServiceTest {

    @Autowired
    private MealDetailService mealDetailService;

    @Autowired
    private MealRepository mealRepository;

    @Autowired
    private FoodRepository foodRepository;

    @Autowired
    private MemberRepository memberRepository;

    @Test
    void 식사에_해당하는_음식을_조회한다() {
        // given
        Member member = new Member("근우@gmail.com");
        memberRepository.save(member);
        Meal meal = mealRepository.save(new Meal(member, MealType.BREAKFAST));
        Food food = foodRepository.save(new Food("사과", 1, FoodUnit.G, "NO", FoodType.BRAND, 1));
        mealDetailService.save(new MealDetailCreateRequest(meal.getId(), food.getId()));

        // when
        MealDetailsResponse mealDetailsResponse = mealDetailService.findAllByMealId(meal.getId());

        // then
        assertThat(mealDetailsResponse.getFoodSimpleResponses().get(0).getFoodName()).isEqualTo("사과");
    }

    @Test
    void 식사상세를_삭제한다() {
        // given
        Member member = new Member("근우@gmail.com");
        memberRepository.save(member);
        Meal meal = mealRepository.save(new Meal(member, MealType.BREAKFAST));
        Food food = foodRepository.save(new Food("사과", 1, FoodUnit.G, "NO", FoodType.BRAND, 1));
        MealDetailResponse response =
                mealDetailService.save(new MealDetailCreateRequest(meal.getId(), food.getId()));

        // when
        mealDetailService.delete(response.getId());

        // then
        assertThatThrownBy(() -> {
            mealDetailService.findById(response.getId());
        })
                .isInstanceOf(NoSuchMealDetailException.class)
                .hasMessage("존재하지 않는 식사 상세입니다.");
    }
}
