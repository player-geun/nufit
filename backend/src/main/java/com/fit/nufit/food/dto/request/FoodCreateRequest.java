package com.fit.nufit.food.dto.request;

import com.fit.nufit.food.domain.FoodType;
import com.fit.nufit.food.domain.FoodUnit;
import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@AllArgsConstructor
@Getter
public class FoodCreateRequest {

    @NotBlank(message = "필수 입력값입니다.")
    private String name;

    @NotBlank(message = "필수 입력값입니다.")
    private String brand;

    @NotNull(message = "필수 입력값입니다.")
    private int amount;

    @NotNull(message = "필수 입력값입니다.")
    private FoodUnit unit;

    @NotNull(message = "필수 입력값입니다.")
    private FoodType type;

    @NotNull(message = "필수 입력값입니다.")
    private double calorie;
}
