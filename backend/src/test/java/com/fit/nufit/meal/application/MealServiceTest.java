package com.fit.nufit.meal.application;

import com.fit.nufit.food.domain.Food;
import com.fit.nufit.food.domain.FoodRepository;
import com.fit.nufit.food.domain.FoodType;
import com.fit.nufit.food.domain.FoodUnit;
import com.fit.nufit.meal.domain.Meal;
import com.fit.nufit.meal.domain.MealRepository;
import com.fit.nufit.meal.domain.MealType;
import com.fit.nufit.meal.dto.request.MealCreateRequest;
import com.fit.nufit.meal.dto.request.MealDetailCreateRequest;
import com.fit.nufit.meal.dto.response.MealDailyCaloriesResponse;
import com.fit.nufit.meal.dto.response.MealResponse;
import com.fit.nufit.member.domain.Member;
import com.fit.nufit.member.domain.MemberRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class MealServiceTest {

    @Autowired
    private MealService mealService;

    @Autowired
    private MealDetailService mealDetailService;

    @Autowired
    private MemberRepository memberRepository;

    @Autowired
    private MealRepository mealRepository;

    @Autowired
    private FoodRepository foodRepository;

    @Test
    void 식사를_생성한다() {
        // given
        Member member = memberRepository.save(new Member("근우@gmail.com"));
        MealCreateRequest request = new MealCreateRequest(MealType.BREAKFAST);

        // when
        MealResponse response = mealService.save(member.getId(), request);

        // then
        assertThat(response.getMemberId()).isEqualTo(member.getId());
    }

    @Test
    void 하루섭취_총칼로리를_조회한다() {
        // given
        Member member = memberRepository.save(new Member("근우@gmail.com"));
        Meal breakfast = mealRepository.save(new Meal(member, MealType.BREAKFAST));
        Meal lunch = mealRepository.save(new Meal(member, MealType.LUNCH));
        Food apple = foodRepository.save(new Food("사과", 10, FoodUnit.G,
                "NO", FoodType.BRAND, 10));
        Food rice = foodRepository.save(new Food("밥", 10, FoodUnit.G,
                "NO", FoodType.BRAND, 20));

        mealDetailService.save(breakfast.getId(), new MealDetailCreateRequest(apple.getId()));
        mealDetailService.save(lunch.getId(), new MealDetailCreateRequest(rice.getId()));

        // when
        MealDailyCaloriesResponse response = mealService.findDailyCaloriesByMemberId(member.getId());

        // then
        assertThat(response.getCalories()).containsValues(10, 20);
    }
}
