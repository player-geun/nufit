package com.fit.nufit.food.domain;

import com.fit.nufit.food.exception.NoSuchFoodException;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

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

    List<FoodNutrient> findByNutrientId(Long nutrientId);

    @Modifying
    @Query("DELETE " +
            "FROM FoodNutrient fn " +
            "WHERE fn.food.id = :foodId")
    void deleteAllByFoodId(Long foodId);

    @Query("SELECT fn " +
            "FROM FoodNutrient fn " +
            "JOIN FETCH fn.food f " +
            "JOIN FETCH fn.nutrient n " +
            "WHERE f.id = :foodId")
    List<FoodNutrient> findByFoodId(Long foodId);

}
