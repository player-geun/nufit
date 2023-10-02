package com.fit.nufit.nutrient.dto.response;

import com.fit.nufit.nutrient.domain.Nutrient;
import com.fit.nufit.nutrient.domain.NutrientUnit;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@Getter
public class NutrientResponse {

    private Long id;
    private String name;
    private int amount;
    private NutrientUnit unit;
    private List<NutrientResponse> childNutrientResponses = new ArrayList<>();

    public NutrientResponse(Nutrient nutrient, int amount) {
        this.id = nutrient.getId();
        this.name = nutrient.getName();
        this.unit = nutrient.getUnit();
        this.amount = amount;
    }

    public void addChildNutrientResponses(NutrientResponse nutrientResponse) {
        childNutrientResponses.add(nutrientResponse);
    }
}
