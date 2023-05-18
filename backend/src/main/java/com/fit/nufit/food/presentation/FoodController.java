package com.fit.nufit.food.presentation;

import com.fit.nufit.food.application.FoodService;
import com.fit.nufit.food.dto.request.FoodCreateRequest;
import com.fit.nufit.food.dto.request.FoodNutrientCreateRequest;
import com.fit.nufit.food.dto.response.FoodResponse;
import com.fit.nufit.food.dto.response.NutrientDetailResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api/foods")
@RequiredArgsConstructor
@RestController
public class FoodController {

    private final FoodService foodService;

    @GetMapping("/details/{mealDetailId}/nutrients")
    public ResponseEntity<NutrientDetailResponse> findNutrientDetailsByMealDetailId(@PathVariable Long mealDetailId) {
        NutrientDetailResponse response = foodService.getNutrientDetailByMealDetailId(mealDetailId);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/create")
    public ResponseEntity<FoodResponse> createFood(@RequestBody FoodCreateRequest request) {
        FoodResponse response = foodService.save(request);
        return ResponseEntity.ok(response);
    }

}
