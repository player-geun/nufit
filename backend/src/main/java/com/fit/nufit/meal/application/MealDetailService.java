package com.fit.nufit.meal.application;

import com.fit.nufit.food.domain.Food;
import com.fit.nufit.food.domain.FoodRepository;
import com.fit.nufit.food.dto.FoodSimpleResponse;
import com.fit.nufit.meal.domain.Meal;
import com.fit.nufit.meal.domain.MealDetail;
import com.fit.nufit.meal.domain.MealDetailRepository;
import com.fit.nufit.meal.domain.MealRepository;
import com.fit.nufit.meal.dto.request.MealDetailCreateRequest;
import com.fit.nufit.meal.dto.response.MealDetailResponse;
import com.fit.nufit.meal.dto.response.MealDetailsResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Transactional(readOnly = true)
@RequiredArgsConstructor
@Service
public class MealDetailService {

    private final MealDetailRepository mealDetailRepository;
    private final MealRepository mealRepository;
    private final FoodRepository foodRepository;

    @Transactional
    public MealDetailResponse save(MealDetailCreateRequest request) {
        Meal meal = mealRepository.getById(request.getMealId());
        Food food = foodRepository.getById(request.getFoodId());
        MealDetail mealDetail = mealDetailRepository.save(
                new MealDetail(meal, food, 1, food.getTotal_calorie()));
        return new MealDetailResponse(mealDetail);
    }

    public MealDetailResponse findById(Long id) {
        MealDetail mealDetail = mealDetailRepository.getById(id);
        return new MealDetailResponse(mealDetail);
    }

    public MealDetailsResponse findAllByMealId(Long mealId) {
        List<MealDetail> mealDetails = mealDetailRepository.findByMealId(mealId);

        List<FoodSimpleResponse> simpleFoods = mealDetails.stream()
                .map(FoodSimpleResponse::new)
                .collect(Collectors.toList());

        Double calorieSum = simpleFoods.stream()
                .map(FoodSimpleResponse::getCalorie)
                .reduce(0.0, Double::sum);

        return new MealDetailsResponse(mealId, calorieSum, simpleFoods);
    }

    @Transactional
    public void delete(Long id) {
        mealDetailRepository.deleteById(id);
    }
}
