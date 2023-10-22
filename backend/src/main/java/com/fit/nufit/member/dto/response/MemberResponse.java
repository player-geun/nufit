package com.fit.nufit.member.dto.response;

import com.fit.nufit.member.domain.ActivityAmount;
import com.fit.nufit.member.domain.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class MemberResponse {

    private Long id;
    private String name;
    private String gender;
    private int age;
    private int height;
    private int weight;
    private ActivityAmount activityAmount;

    public MemberResponse(Member member) {
        this(member.getId(), member.getName(), member.getGender(), member.getAge(), member.getHeight(),
                member.getWeight(), member.getActivityAmount());
    }
}
