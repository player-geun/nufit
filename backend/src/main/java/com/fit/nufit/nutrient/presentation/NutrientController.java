package com.fit.nufit.nutrient.presentation;

import com.fit.nufit.nutrient.application.NutrientService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api")
@RequiredArgsConstructor
@RestController
public class NutrientController {

    private final NutrientService nutrientService;

}
