package com.fit.nufit.meal.application;

import com.fit.nufit.meal.domain.*;
import com.fit.nufit.meal.dto.request.MealCreateRequest;
import com.fit.nufit.meal.dto.response.MealResponse;
import com.fit.nufit.member.domain.Member;
import com.fit.nufit.member.domain.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional(readOnly = true)
@RequiredArgsConstructor
@Service
public class MealService {

    private final MealRepository mealRepository;
    private final MemberRepository memberRepository;

    @Transactional
    public MealResponse save(Long memberId, MealCreateRequest request) {
        Member member = memberRepository.getById(memberId);
        Meal meal = mealRepository.save(new Meal(member, request.getMealType()));
        return new MealResponse(meal);
    }

    public MealResponse findById(Long id) {
        Meal meal = mealRepository.getById(id);
        return new MealResponse(meal);
    }

    @Transactional
    public void delete(Long id) {
        mealRepository.deleteById(id);
    }
}
