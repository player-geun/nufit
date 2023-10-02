package com.fit.nufit.nutrient.domain;

import com.fit.nufit.nutrient.exception.NoSuchNutrientException;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface NutrientRepository extends JpaRepository<Nutrient, Long> {

    default Nutrient getById(Long id) {
        return this.findById(id)
                .orElseThrow(NoSuchNutrientException::new);
    }

    Optional<Nutrient> findByName(String name);

    default Nutrient getByName(String name) {
        return this.findByName(name)
                .orElseThrow(NoSuchNutrientException::new);
    }

}
