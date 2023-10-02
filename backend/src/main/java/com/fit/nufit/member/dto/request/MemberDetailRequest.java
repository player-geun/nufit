package com.fit.nufit.member.dto.request;

import com.fit.nufit.member.domain.ActivityAmount;
import com.fit.nufit.member.domain.Sex;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class MemberDetailRequest {

    private Sex sex;
    private int age;
    private int height;
    private int weight;
    private ActivityAmount activityAmount;
}
