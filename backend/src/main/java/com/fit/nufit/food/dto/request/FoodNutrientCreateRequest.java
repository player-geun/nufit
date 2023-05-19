package com.fit.nufit.food.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@AllArgsConstructor
@Getter
public class FoodNutrientCreateRequest {

    @NotBlank(message = "필수 입력값입니다.")
    @Size(min = 1, max = 10, message = "영양소 이름은 최소 한 글자 이상 10자 이하여야 합니다.")
    private String name;

    @NotNull(message = "필수 입력값입니다.")
    private double amount;

}
