package com.fit.nufit.meal.domain;

import com.fit.nufit.meal.exception.NoSuchMealException;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MealRepository extends JpaRepository<Meal, Long> {

    default Meal getById(Long id) {
        return this.findById(id)
                .orElseThrow(NoSuchMealException::new);
    }
}
