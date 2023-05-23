package com.fit.nufit.food.presentation;

import com.fit.nufit.common.ControllerTest;
import com.fit.nufit.food.dto.request.FoodCreateRequest;
import com.fit.nufit.food.dto.request.FoodNutrientUpdateRequest;
import com.fit.nufit.food.dto.response.FoodResponse;
import com.fit.nufit.food.dto.response.NutrientDetailResponse;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;

import java.util.ArrayList;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
import static org.mockito.BDDMockito.willDoNothing;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(FoodController.class)
class FoodControllerTest extends ControllerTest {

    @Test
    void 새로운_음식을_등록한다() throws Exception {
        // given
        FoodCreateRequest request = new FoodCreateRequest();
        given(foodService.save(any(FoodCreateRequest.class)))
                .willReturn(new FoodResponse());

        // when & then
        mockMvc.perform(post("/api/foods")
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request))
                )
                .andDo(print())
                .andExpect(status().isOk());
    }

    @Test
    void 등록한_음식을_조회한다() throws Exception {
        // given
        Long memberId = 1L;
        given(foodService.getFoodsByMemberId(any()))
                .willReturn(new ArrayList<>());

        // when & then
        mockMvc.perform(get("/api/foods/{memberId}", memberId)
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                )
                .andDo(print())
                .andExpect(status().isOk());

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
    void 검색_단어를_기준으로_자동완성_기능을_제공한다() throws Exception {
        // given
        given(foodService.getFoodNamesBySearchWord(any()))
                .willReturn(new ArrayList<>());

        // when & then
        mockMvc.perform(get("/api/foods/names?q=커피")
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                )
                .andDo(print())
                .andExpect(status().isOk());
    }

    @Test
    void 등록한_음식의_영양소를_수정한다() throws Exception {
        // given
        Long foodId = 1L;
        FoodNutrientUpdateRequest request = new FoodNutrientUpdateRequest();
        given(foodNutrientService.update(any(FoodNutrientUpdateRequest.class)))
                .willReturn(new NutrientDetailResponse());

        // when & then
        mockMvc.perform(put("/api/foods/{foodId}/nutrients", foodId)
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request))
                )
                .andDo(print())
                .andExpect(status().isOk());
    }


    @Test
    void 등록한_음식을_삭제한다() throws Exception {
        // given
        Long foodId = 1L;
        willDoNothing().given(foodService).deleteFoodAndFoodNutrientsById(any());

        // when & then
        mockMvc.perform(delete("/api/foods/{foodId}", foodId)
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                )
                .andDo(print())
                .andExpect(status().isNoContent());
    }
}
