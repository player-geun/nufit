package com.fit.nufit.member.dto.response;

import com.fit.nufit.member.domain.ActivityAmount;
import com.fit.nufit.member.domain.Member;
import com.fit.nufit.member.domain.Sex;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class MemberDetailResponse {

    private Sex sex;
    private int age;
    private int height;
    private int weight;
    private ActivityAmount activityAmount;

    public MemberDetailResponse(Member member) {
        this(member.getSex(), member.getAge(), member.getHeight(),
                member.getWeight(), member.getActivityAmount());
    }
}
