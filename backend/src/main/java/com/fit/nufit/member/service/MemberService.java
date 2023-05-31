package com.fit.nufit.member.service;

import com.fit.nufit.member.domain.Member;
import com.fit.nufit.member.domain.MemberRepository;
import com.fit.nufit.member.dto.request.MemberDetailRequest;
import com.fit.nufit.member.dto.response.MemberDetailResponse;
import com.fit.nufit.member.dto.response.MemberGoalResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Transactional(readOnly = true)
@RequiredArgsConstructor
@Service
public class MemberService {

    private final MemberRepository memberRepository;

    public MemberDetailResponse findDetailBySocialId(String socialId) {
        Member member = memberRepository.getBySocialId(socialId);
        return new MemberDetailResponse(member);
    }

    public MemberGoalResponse findGoalsBySocialId(String socialId) {
        Member member = memberRepository.getBySocialId(socialId);
        return new MemberGoalResponse(member.calculateGoalCalorie(), member.calculateGoalCarbohydrate(),
                member.calculateGoalProtein(), member.calculateGoalFat());
    }

    @Transactional
    public void updateDetailBySocialId(String socialId, MemberDetailRequest request) {
        Member member = memberRepository.getBySocialId(socialId);
        member.changeDetail(request.getSex(), request.getAge(),
                request.getHeight(), request.getWeight(), request.getActivityAmount());
    }
}
