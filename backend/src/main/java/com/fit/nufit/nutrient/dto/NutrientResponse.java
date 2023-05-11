package com.fit.nufit.nutrient.dto;

import com.fit.nufit.nutrient.domain.Nutrient;
import com.fit.nufit.nutrient.domain.NutrientUnit;
import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class NutrientResponse {

    private Long id;
    private String name;
    private int calorie;
    private NutrientUnit unit;


    public NutrientResponse(Nutrient nutrient) {
        this.name = nutrient.getName();
        this.calorie = nutrient.getCalorie();
        this.unit = nutrient.getUnit();
    }
}
