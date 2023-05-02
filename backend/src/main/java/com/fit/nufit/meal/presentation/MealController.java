package com.fit.nufit.meal.presentation;

import com.fit.nufit.meal.application.MealService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api")
@RequiredArgsConstructor
@RestController
public class MealController {

    private final MealService mealService;
}
