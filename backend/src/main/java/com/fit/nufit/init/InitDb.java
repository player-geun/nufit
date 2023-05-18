package com.fit.nufit.init;

import com.fit.nufit.nutrient.domain.Nutrient;
import com.fit.nufit.nutrient.domain.NutrientRepository;
import com.fit.nufit.nutrient.domain.NutrientUnit;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.PostConstruct;

@Component
@RequiredArgsConstructor
public class InitDb {

    private final InitService initService;

    @PostConstruct
    public void init() {
        initService.dbInit();
    }

    @Component
    @Transactional
    @RequiredArgsConstructor
    static class InitService {
        private final NutrientRepository nutrientRepository;
        public void dbInit() {
            nutrientRepository.save(new Nutrient("탄수화물", NutrientUnit.G));
            nutrientRepository.save(new Nutrient("지방", NutrientUnit.G));
        }
    }
}
