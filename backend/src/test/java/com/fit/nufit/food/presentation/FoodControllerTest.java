package com.fit.nufit.food.presentation;

import com.fit.nufit.common.ControllerTest;
import com.fit.nufit.food.dto.request.FoodCreateRequest;
import com.fit.nufit.food.dto.request.FoodNutrientCreateRequest;
import com.fit.nufit.food.dto.response.FoodResponse;
import com.fit.nufit.food.dto.response.NutrientDetailResponse;
import com.fit.nufit.nutrient.domain.Nutrient;
import com.fit.nufit.nutrient.domain.NutrientRepository;
import com.fit.nufit.nutrient.domain.NutrientUnit;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(FoodController.class)
class FoodControllerTest extends ControllerTest {

    @BeforeEach
    void beforeEach() {
        nutrientRepository.save(new Nutrient("탄수화물", NutrientUnit.G));
        nutrientRepository.save(new Nutrient("지방", NutrientUnit.G));
    }

    @Test
    void 음식의_영양성분_상세를_조회한다() throws Exception {
        // given
        Long mealDetailId = 1L;

        given(foodService.getNutrientDetailByMealDetailId(any()))
                .willReturn(new NutrientDetailResponse());
        // when & then
        mockMvc.perform(get("/api/foods/details/{mealDetailId}/nutrients", mealDetailId)
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                )
                .andDo(print())
                .andExpect(status().isOk());
    }

    @Test
    void 새로운_음식을_등록한다() throws Exception {
        // given
        FoodNutrientCreateRequest carb = new FoodNutrientCreateRequest("탄수화물", 10);
        FoodNutrientCreateRequest fat = new FoodNutrientCreateRequest("지방", 5);
        FoodCreateRequest request = new FoodCreateRequest("파스타", "오뚜기", 1,
                "g", "brand", 500, List.of(carb, fat));

        given(foodService.save(any(FoodCreateRequest.class)))
                .willReturn(new FoodResponse());

        // when & then
        mockMvc.perform(MockMvcRequestBuilders.post("/api/foods")
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request))
                )
                .andDo(print())
                .andExpect(status().isOk());
    }
}
