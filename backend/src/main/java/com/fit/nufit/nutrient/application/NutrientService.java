package com.fit.nufit.nutrient.application;

import com.fit.nufit.nutrient.domain.Nutrient;
import com.fit.nufit.nutrient.domain.NutrientRepository;
import com.fit.nufit.nutrient.domain.NutrientUnit;
import com.fit.nufit.nutrient.dto.NutrientResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;



@RequiredArgsConstructor
@Transactional(readOnly = true)
@Service
public class NutrientService {

    private final NutrientRepository nutrientRepository;

    @Transactional
    public NutrientResponse save(String name, int calorie, NutrientUnit unit) {
        Nutrient nutrient = nutrientRepository.save(new Nutrient(name, calorie, unit));
        return new NutrientResponse(nutrient);
    }

    public NutrientResponse findById(Long id) {
        Nutrient findNutrient = nutrientRepository.getById(id);
        return new NutrientResponse(findNutrient);
    }

    @Transactional
    public void delete(Long id) {
        nutrientRepository.deleteById(id);
    }

}
