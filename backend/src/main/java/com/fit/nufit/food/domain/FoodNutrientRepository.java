package com.fit.nufit.food.domain;

import com.fit.nufit.food.exception.NoSuchFoodException;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface FoodNutrientRepository extends JpaRepository<FoodNutrient, Long> {

    default FoodNutrient getById(Long id) {
        return this.findById(id)
                .orElseThrow(NoSuchFoodException::new);
    }

    default List<FoodNutrient> getByFoodId(Long foodId) {
        return this.findByFoodId(foodId);
    }

    default List<FoodNutrient> getByNutrientId(Long nutrientId) {
        return this.findByNutrientId(nutrientId);
    }

    List<FoodNutrient> findByFoodId(Long foodId);

    List<FoodNutrient> findByNutrientId(Long nutrientId);


}
