package com.fit.nufit.common;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fit.nufit.food.domain.FoodRepository;
import com.fit.nufit.meal.application.MealDetailService;
import com.fit.nufit.meal.application.MealService;
import com.fit.nufit.meal.domain.MealDetailRepository;
import com.fit.nufit.meal.domain.MealRepository;
import com.fit.nufit.meal.presentation.MealController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

@WebMvcTest(MealController.class)
public abstract class ControllerTest {

    @Autowired
    protected MockMvc mockMvc;

    @Autowired
    protected ObjectMapper objectMapper;

    @MockBean
    protected MealDetailRepository mealDetailRepository;

    @MockBean
    protected MealRepository mealRepository;

    @MockBean
    protected MealDetailService mealDetailService;

    @MockBean
    protected MealService mealService;

    @MockBean
    protected FoodRepository foodRepository;
}
