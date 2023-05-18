package com.fit.nufit.meal.application;

import com.fit.nufit.meal.domain.*;
import com.fit.nufit.meal.dto.request.MealCreateRequest;
import com.fit.nufit.meal.dto.response.MealDailyCaloriesResponse;
import com.fit.nufit.meal.dto.response.MealResponse;
import com.fit.nufit.member.domain.Member;
import com.fit.nufit.member.domain.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Transactional(readOnly = true)
@RequiredArgsConstructor
@Service
public class MealService {

    private final MealRepository mealRepository;
    private final MemberRepository memberRepository;
    private final MealDetailRepository mealDetailRepository;

    @Transactional
    public MealResponse save(Long memberId, MealCreateRequest request) {
        Member member = memberRepository.getById(memberId);
        Meal meal = mealRepository.save(new Meal(member, request.getMealType()));
        return new MealResponse(meal);
    }

    public MealResponse findById(Long id) {
        Meal meal = mealRepository.getById(id);
        return new MealResponse(meal);
    }

    public MealDailyCaloriesResponse findDailyCaloriesByMemberId(Long memberId) {
        List<Meal> meals = mealRepository
                .findAllByMemberIdAndDateRange(memberId,
                        LocalDateTime.of(LocalDate.now(), LocalTime.MIN),
                        LocalDateTime.of(LocalDate.now(), LocalTime.MAX));
        return new MealDailyCaloriesResponse(memberId, getSumOfCaloriesByMealType(meals));
    }

    private Map<MealType, Integer> getSumOfCaloriesByMealType(List<Meal> meals) {
        Map<MealType, Integer> result = new HashMap<>();
        for (Meal meal : meals) {
            List<MealDetail> mealDetails = mealDetailRepository.findByMealId(meal.getId());
            Integer sumOfCalories = mealDetails.stream()
                    .map(MealDetail::getCalorie)
                    .reduce(0, Integer::sum);

            result.put(meal.getType(), sumOfCalories);
        }
        return result;
    }

    @Transactional
    public void delete(Long id) {
        mealRepository.deleteById(id);
    }
}
