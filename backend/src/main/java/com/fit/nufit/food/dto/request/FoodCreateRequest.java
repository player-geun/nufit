package com.fit.nufit.food.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;

@AllArgsConstructor
@Getter
public class FoodCreateRequest {

    @NotBlank(message = "필수 입력값입니다.")
    @Size(min = 1, max = 30, message = "음식 이름은 최소 한 글자 이상 30자 이하여야 합니다.")
    private String name;

    @Size(max = 20, message = "브랜드 이름은 20자 이하여야 합니다.")
    private String brand;

    @NotNull(message = "필수 입력값입니다.")
    private int amount;

    @NotNull(message = "필수 입력값입니다.")
    private String unit;

    @NotNull(message = "필수 입력값입니다.")
    private String type;

    @NotNull(message = "필수 입력값입니다.")
    private double calorie;

    private List<FoodNutrientCreateRequest> nutrients;

}
