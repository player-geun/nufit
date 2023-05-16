package com.fit.nufit.food.application;

import com.fit.nufit.food.domain.Food;
import com.fit.nufit.food.domain.FoodNutrient;
import com.fit.nufit.food.domain.FoodNutrientRepository;
import com.fit.nufit.food.domain.FoodRepository;
import com.fit.nufit.food.dto.request.FoodCreateRequest;
import com.fit.nufit.food.dto.response.FoodResponse;
import com.fit.nufit.food.dto.response.NutrientDetailResponse;
import com.fit.nufit.meal.domain.MealDetail;
import com.fit.nufit.meal.domain.MealDetailRepository;
import com.fit.nufit.nutrient.domain.Nutrient;
import com.fit.nufit.nutrient.dto.response.NutrientResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RequiredArgsConstructor
@Transactional(readOnly = true)
@Service
public class FoodService {

    private final FoodRepository foodRepository;

    private final MealDetailRepository mealDetailRepository;

    private final FoodNutrientRepository foodNutrientRepository;

    @Transactional
    public FoodResponse save(FoodCreateRequest request) {
        Food food = foodRepository.save(Food.toEntity(request));
        return new FoodResponse(food);
    }

    public FoodResponse findById(Long id) {
        Food findFood = foodRepository.getById(id);
        return new FoodResponse(findFood);
    }

    public NutrientDetailResponse getNutrientDetailByMealDetailId(Long mealDetailId) {
        MealDetail mealDetail = mealDetailRepository.getById(mealDetailId);
        int foodCount = mealDetail.getFoodCount();

        Food food = mealDetail.getFood();
        String foodName = food.getName();
        int calorieTotal = (int) Math.round(food.getCalorie() * foodCount);
        List<FoodNutrient> foodNutrients = foodNutrientRepository.findByFoodId(food.getId());
        Map<Long, NutrientResponse> parentNutrientResponses = new HashMap<>();

        //상위 영양소인 경우
        for (FoodNutrient foodNutrient : foodNutrients) {
            Nutrient nutrient = foodNutrient.getNutrient();
            Nutrient parentNutrient = nutrient.getParentNutrient();
            if (parentNutrient == null) {
                double totalNutrientAmount = foodNutrient.getAmount() * foodCount;
                parentNutrientResponses.put(nutrient.getId(), new NutrientResponse(nutrient, (int) Math.round(totalNutrientAmount)));
            }
        }

        //하위 영양소인 경우
        for (FoodNutrient foodNutrient : foodNutrients) {
            Nutrient nutrient = foodNutrient.getNutrient();
            Nutrient parentNutrient = nutrient.getParentNutrient();
            if (parentNutrient != null) {
                double totalNutrientAmount = foodNutrient.getAmount() * foodCount;
                NutrientResponse nutrientResponse = parentNutrientResponses.get(parentNutrient.getId());
                nutrientResponse.addChildNutrientResponses(new NutrientResponse(nutrient,(int) Math.round(totalNutrientAmount)));
            }
        }
        List<NutrientResponse> nutrientResponses = new ArrayList<>(parentNutrientResponses.values());

        return new NutrientDetailResponse(foodName, calorieTotal, nutrientResponses);
    }

    @Transactional
    public void delete(Long id) {
        foodRepository.deleteById(id);
    }

}
