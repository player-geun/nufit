package com.fit.nufit.meal.domain;

import com.fit.nufit.meal.exception.NoSuchMealException;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface MealRepository extends JpaRepository<Meal, Long> {

    default Meal getById(Long id) {
        return this.findById(id)
                .orElseThrow(NoSuchMealException::new);
    }

    @Query("SELECT m "
            + "FROM Meal m "
            + "WHERE m.member.id =:memberId "
            + "AND m.createdAt >= :startDate "
            + "AND m.createdAt <= :endDate ")
    List<Meal> findAllByMemberIdAndDateRange(Long memberId, LocalDateTime startDate, LocalDateTime endDate);
}
