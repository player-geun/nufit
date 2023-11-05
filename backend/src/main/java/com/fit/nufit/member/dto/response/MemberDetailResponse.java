package com.fit.nufit.member.dto.response;

import com.fit.nufit.member.domain.ActivityAmount;
import com.fit.nufit.member.domain.Member;
import com.fit.nufit.member.domain.Sex;
import com.nimbusds.openid.connect.sdk.claims.Gender;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class MemberDetailResponse {

    private String gender;
    private int age;
    private int height;
    private int weight;
    private ActivityAmount activityAmount;

    public MemberDetailResponse(Member member) {
        this(member.getGender(), member.getAge(), member.getHeight(),
                member.getWeight(), member.getActivityAmount());
    }
}
