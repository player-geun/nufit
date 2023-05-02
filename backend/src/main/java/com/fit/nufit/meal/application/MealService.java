package com.fit.nufit.meal.application;

import com.fit.nufit.meal.domain.Meal;
import com.fit.nufit.meal.domain.MealRepository;
import com.fit.nufit.meal.domain.MealType;
import com.fit.nufit.meal.dto.MealResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional(readOnly = true)
@RequiredArgsConstructor
@Service
public class MealService {

    private final MealRepository mealRepository;

    @Transactional
    public MealResponse save(MealType mealType) {
        Meal meal = mealRepository.save(new Meal(mealType));
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
