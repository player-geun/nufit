package com.fit.nufit.meal.domain;

import com.fit.nufit.meal.exception.NoSuchMealDetailException;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MealDetailRepository extends JpaRepository<MealDetail, Long> {

    default MealDetail getById(Long id) {
        return this.findById(id)
                .orElseThrow(NoSuchMealDetailException::new);
    }
}
