package com.fit.nufit.meal.presentation;

import com.fit.nufit.common.CommonResponse;
import com.fit.nufit.common.ControllerTest;
import com.fit.nufit.food.domain.Food;
import com.fit.nufit.food.domain.FoodType;
import com.fit.nufit.food.dto.response.FoodSimpleResponse;
import com.fit.nufit.meal.domain.Meal;
import com.fit.nufit.meal.domain.MealDetail;
import com.fit.nufit.meal.domain.MealType;
import com.fit.nufit.meal.dto.request.MealDetailRemoveRequest;
import com.fit.nufit.meal.dto.response.MealDetailsResponse;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static org.mockito.BDDMockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(MealController.class)
class MealControllerTest extends ControllerTest {

    @Test
    void 식사에_해당하는_음식을_조회한다() throws Exception {
        // given
        Long mealId = 1L;
        List<FoodSimpleResponse> simpleFoods = List.of(
                new FoodSimpleResponse(1L, 1, "사과", 40),
                new FoodSimpleResponse(2L, 1, "배", 30)
        );

        given(mealDetailService.findAllByMealId(any()))
                .willReturn(new MealDetailsResponse(any(), 1.1, simpleFoods));

        // when & then
        mockMvc.perform(get("/api/meals/{mealId}/details", mealId)
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                )
                .andDo(print())
                .andExpect(status().isOk());
    }

    @Test
    void 식사에서_음식을_삭제한다() throws Exception {
        // given
        given(mealDetailService.deleteAllById(any()))
                .willReturn(new CommonResponse("성공적으로 삭제되었습니다.", HttpStatus.OK.value()));

        // when & then
        String content = objectMapper.writeValueAsString(new MealDetailRemoveRequest(List.of(1L, 2L)));
        mockMvc.perform(get("/api/meals/detail/remove")
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(content)
                )
                .andDo(print())
                .andExpect(status().isOk());

    }
}
