package com.fit.nufit.member.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class MemberGoalResponse {

    private int calorie;
    private int carbohydrate;
    private int protein;
    private int fat;
}
