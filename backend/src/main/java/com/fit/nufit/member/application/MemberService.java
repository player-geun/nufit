package com.fit.nufit.member.application;

import com.fit.nufit.member.domain.Member;
import com.fit.nufit.member.domain.MemberRepository;
import com.fit.nufit.member.dto.request.MemberDetailRequest;
import com.fit.nufit.member.dto.response.MemberDetailResponse;
import com.fit.nufit.member.dto.response.MemberGoalResponse;
import com.fit.nufit.member.dto.response.MemberResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Transactional(readOnly = true)
@RequiredArgsConstructor
@Service
public class MemberService {

    private final MemberRepository memberRepository;

    public MemberResponse findById(Long id) {
        Member member = memberRepository.getById(id);
        return new MemberResponse(member);
    }

    public MemberDetailResponse findDetailById(Long id) {
        Member member = memberRepository.getById(id);
        return new MemberDetailResponse(member);
    }

    public MemberGoalResponse findGoalsById(Long id) {
        Member member = memberRepository.getById(id);
        return new MemberGoalResponse(member.calculateGoalCalorie(), member.calculateGoalCarbohydrate(),
                member.calculateGoalProtein(), member.calculateGoalFat());
    }

    @Transactional
    public void updateDetailById(Long id, MemberDetailRequest request) {
        Member member = memberRepository.getById(id);
        member.changeDetail(request.getGender(), request.getAge(),
                request.getHeight(), request.getWeight(), request.getActivityAmount());
    }
}
