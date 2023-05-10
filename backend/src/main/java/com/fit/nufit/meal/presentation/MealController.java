package com.fit.nufit.meal.presentation;

import com.fit.nufit.meal.application.MealDetailService;
import com.fit.nufit.meal.dto.response.MealDetailsResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/api/meals")
@RequiredArgsConstructor
@RestController
public class MealController {

    private final MealDetailService mealDetailService;

    @GetMapping("/{mealId}/details")
    public ResponseEntity<MealDetailsResponse> findAllByMealId(@PathVariable Long mealId) {
        MealDetailsResponse response = mealDetailService.findAllByMealId(mealId);
        return ResponseEntity.ok(response);
    }
}
