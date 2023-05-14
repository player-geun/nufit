package com.fit.nufit.meal.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class MealDetailRemoveRequest {

    @NotNull(message = "Null일 수 없습니다.")
    private List<Long> mealDetailIds;
}
