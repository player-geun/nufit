package com.fit.nufit.meal.domain;

import com.fit.nufit.meal.exception.NoSuchMealDetailException;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MealDetailRepository extends JpaRepository<MealDetail, Long> {

    default MealDetail getById(Long id) {
        return this.findById(id)
                .orElseThrow(NoSuchMealDetailException::new);
    }

    @Query("SELECT md "
            + "FROM MealDetail md "
            + "JOIN FETCH md.meal m "
            + "JOIN FETCH md.food "
            + "WHERE m.id =:mealId")
    List<MealDetail> findByMealId(Long mealId);
}
