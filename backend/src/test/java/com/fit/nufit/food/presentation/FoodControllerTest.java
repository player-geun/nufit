package com.fit.nufit.food.presentation;

import com.fit.nufit.common.ControllerTest;
import com.fit.nufit.food.dto.response.NutrientDetailResponse;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(FoodController.class)
class FoodControllerTest extends ControllerTest {

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


}