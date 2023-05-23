package com.fit.nufit.food.domain;

import com.fit.nufit.food.exception.NoSuchFoodException;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FoodRepository extends JpaRepository<Food, Long> {

    default Food getById(Long id) {
        return this.findById(id)
                .orElseThrow(NoSuchFoodException::new);
    }

    Optional<Food> findByName(String name);

    @Query("SELECT f " +
            "FROM Food f " +
            "WHERE f.writer.id = :memberId")
    List<Food> getByMemberId(Long memberId);

    default Food getByName(String name) {
        return this.findByName(name)
                .orElseThrow(NoSuchFoodException::new);
    }

    @Query("SELECT f.name " +
            "FROM Food f " +
            "WHERE f.name LIKE '%'||:searchWord||'%' " +
            "ORDER BY " +
            "CASE WHEN f.name = :searchWord THEN 1 " +
            "WHEN f.name LIKE :searchWord||'%' THEN 2 " +
            "WHEN f.name LIKE '%'||:searchWord THEN 3 " +
            "ELSE 4 END, f.name ASC")
    List<String> getFoodNamesBySearchWord(String searchWord, Pageable pageable);
}
