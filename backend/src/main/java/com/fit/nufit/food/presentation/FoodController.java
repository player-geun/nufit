package com.fit.nufit.food.presentation;

import com.fit.nufit.food.application.FoodNutrientService;
import com.fit.nufit.food.application.FoodService;
import com.fit.nufit.food.dto.request.FoodCreateRequest;
import com.fit.nufit.food.dto.request.FoodNutrientUpdateRequest;
import com.fit.nufit.food.dto.response.FoodResponse;
import com.fit.nufit.food.dto.response.NutrientDetailResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RequestMapping("/api/foods")
@RequiredArgsConstructor
@RestController
public class FoodController {

    private final FoodService foodService;
    private final FoodNutrientService foodNutrientService;

    @GetMapping("/details/{mealDetailId}/nutrients")
    public ResponseEntity<NutrientDetailResponse> findNutrientDetailsByMealDetailId(@PathVariable Long mealDetailId) {
        NutrientDetailResponse response = foodService.getNutrientDetailByMealDetailId(mealDetailId);
        return ResponseEntity.ok(response);
    }

    @PostMapping
    public ResponseEntity<FoodResponse> createFood(@RequestBody FoodCreateRequest request) {
        FoodResponse response = foodService.save(request);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/{foodId}/nutrients")
    public ResponseEntity<NutrientDetailResponse> updateFoodNutrients(@RequestBody FoodNutrientUpdateRequest request) {
        NutrientDetailResponse response = foodNutrientService.update(request);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/{foodId}")
    public ResponseEntity<Void> deleteFood(@PathVariable Long foodId) {
        foodService.deleteFoodAndFoodNutrientById(foodId);
        return ResponseEntity.noContent().build();
    }
}
