package com.fit.nufit.food.application;

import com.fit.nufit.food.domain.Food;
import com.fit.nufit.food.domain.FoodRepository;
import com.fit.nufit.food.domain.FoodType;
import com.fit.nufit.food.dto.FoodResponse;
import com.fit.nufit.meal.domain.Meal;
import com.fit.nufit.meal.domain.MealRepository;
import com.fit.nufit.meal.domain.MealType;
import com.fit.nufit.meal.dto.MealResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;



@RequiredArgsConstructor
@Transactional(readOnly = true)
@Service
public class FoodService {

    private final FoodRepository foodRepository;

    @Transactional
    public FoodResponse save(String name, int amount, String brand, FoodType foodtype, int total_calorie) {
        Food food = foodRepository.save(new Food(name, amount, brand, foodtype, total_calorie));
        return new FoodResponse(food);
    }

    public FoodResponse findById(Long id) {
        Food findFood = foodRepository.getById(id);
        return new FoodResponse(findFood);
    }

    @Transactional
    public void delete(Long id) {
        foodRepository.deleteById(id);
    }

}
