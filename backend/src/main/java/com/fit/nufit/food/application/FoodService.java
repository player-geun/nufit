package com.fit.nufit.food.application;

import com.fit.nufit.food.domain.Food;
import com.fit.nufit.food.domain.FoodRepository;
import com.fit.nufit.food.dto.request.FoodCreateRequest;
import com.fit.nufit.food.dto.response.FoodResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@RequiredArgsConstructor
@Transactional(readOnly = true)
@Service
public class FoodService {

    private final FoodRepository foodRepository;

    @Transactional
    public FoodResponse save(FoodCreateRequest request) {
        Food food = foodRepository.save(Food.toEntity(request));
        return new FoodResponse(food);
    }

    public FoodResponse findById(Long id) {
        Food findFood = foodRepository.getById(id);
        return new FoodResponse(findFood);
    }

    @Transactional
    public void delete(Long id) {
        foodRepository.deleteById(id);
    }

}
