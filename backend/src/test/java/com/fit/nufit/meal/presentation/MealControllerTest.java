package com.fit.nufit.meal.presentation;

import com.fit.nufit.common.ControllerTest;
import com.fit.nufit.food.dto.response.FoodSimpleResponse;
import com.fit.nufit.meal.domain.MealType;
import com.fit.nufit.meal.dto.request.MealCreateRequest;
import com.fit.nufit.meal.dto.request.MealDetailCreateRequest;
import com.fit.nufit.meal.dto.response.MealDetailResponse;
import com.fit.nufit.meal.dto.response.MealDetailsResponse;
import com.fit.nufit.meal.dto.response.MealResponse;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;

import java.util.List;

import static org.mockito.BDDMockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(MealController.class)
class MealControllerTest extends ControllerTest {

    @Test
    void 식사를_등록한다() throws Exception {
        // given
        Long memberId = 1L;
        MealCreateRequest request = new MealCreateRequest();

        given(mealService.save(any(), any(MealCreateRequest.class)))
                .willReturn(new MealResponse());

        // when & then
        mockMvc.perform(post("/api/meals")
                        .param("memberId", String.valueOf(memberId))
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request))
                )
                .andDo(print())
                .andExpect(status().isOk());
    }

    @Test
    void 식사상세를_등록한다() throws Exception {
        // given
        Long mealId = 1L;
        MealDetailCreateRequest request = new MealDetailCreateRequest();

        given(mealDetailService.save(any(), any(MealDetailCreateRequest.class)))
                .willReturn(new MealDetailResponse());

        // when & then
        mockMvc.perform(post("/api/meals/{mealId}", mealId)
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request))
                )
                .andDo(print())
                .andExpect(status().isOk());
    }

    @Test
    void 식사에_해당하는_음식을_조회한다() throws Exception {
        // given
        Long mealId = 1L;

        given(mealDetailService.findAllByMealId(any()))
                .willReturn(new MealDetailsResponse());

        // when & then
        mockMvc.perform(get("/api/meals/{mealId}/details", mealId)
                    .accept(MediaType.APPLICATION_JSON)
                    .contentType(MediaType.APPLICATION_JSON)
        )
                .andDo(print())
                .andExpect(status().isOk());
    }
    
    @Test
    void 식사상세를_삭제한다() throws Exception {
        // given
        Long mealDetailId = 1L;
        willDoNothing().given(mealDetailService).delete(any());

        // when & then
        mockMvc.perform(delete("/api/meals/details/{mealDetailId}", mealDetailId)
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                )
                .andDo(print())
                .andExpect(status().isNoContent());
    }
}
