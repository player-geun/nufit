package com.fit.nufit.meal.presentation;

import com.fit.nufit.meal.application.MealDetailService;
import com.fit.nufit.meal.application.MealService;
import com.fit.nufit.meal.dto.request.MealCreateRequest;
import com.fit.nufit.meal.dto.request.MealDetailCreateRequest;
import com.fit.nufit.meal.dto.response.MealDetailResponse;
import com.fit.nufit.meal.dto.response.MealDetailsResponse;
import com.fit.nufit.meal.dto.response.MealResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/api/meals")
@RequiredArgsConstructor
@RestController
public class MealController {

    private final MealService mealService;
    private final MealDetailService mealDetailService;

    @PostMapping
    public ResponseEntity<MealResponse> save(@RequestParam Long memberId,
                                             @RequestBody MealCreateRequest request) {
        MealResponse response = mealService.save(memberId, request);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/{mealId}")
    public ResponseEntity<MealDetailResponse> saveMealDetail(@PathVariable Long mealId,
                                                             @RequestBody MealDetailCreateRequest request) {
        MealDetailResponse response = mealDetailService.save(mealId, request);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/{mealId}/details")
    public ResponseEntity<MealDetailsResponse> findMealDetailsByMealId(@PathVariable Long mealId) {
        MealDetailsResponse response = mealDetailService.findAllByMealId(mealId);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/details/{mealDetailId}")
    public ResponseEntity<Void> deleteByMealDetailId(@PathVariable Long mealDetailId) {
        mealDetailService.delete(mealDetailId);
        return ResponseEntity.noContent().build();
    }
}
