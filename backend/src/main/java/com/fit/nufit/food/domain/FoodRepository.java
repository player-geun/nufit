package com.fit.nufit.food.domain;

import com.fit.nufit.food.exception.NoSuchFoodException;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FoodRepository extends JpaRepository<Food, Long> {

    default Food getById(Long id) {
        return this.findById(id)
                .orElseThrow(NoSuchFoodException::new);
    }

}
