package com.fit.nufit.meal.application;

import com.fit.nufit.meal.domain.*;
import com.fit.nufit.meal.dto.request.MealCreateRequest;
import com.fit.nufit.meal.dto.response.MealResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional(readOnly = true)
@RequiredArgsConstructor
@Service
public class MealService {

    private final MealRepository mealRepository;

    @Transactional
    public MealResponse save(MealCreateRequest request) {
        Meal meal = mealRepository.save(new Meal(request.getMealType()));
        return new MealResponse(meal);
    }

    public MealResponse findById(Long id) {
        Meal meal = mealRepository.getById(id);
        return new MealResponse(meal);
    }

    @Transactional
    public void update(Long id, MealType mealType) {
        Meal meal = mealRepository.getById(id);

        meal.change(mealType);
    }

    @Transactional
    public void delete(Long id) {
        mealRepository.deleteById(id);
    }
}
