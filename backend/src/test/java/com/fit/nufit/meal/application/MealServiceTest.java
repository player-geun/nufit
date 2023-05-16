package com.fit.nufit.meal.application;

import com.fit.nufit.meal.domain.MealType;
import com.fit.nufit.meal.dto.request.MealCreateRequest;
import com.fit.nufit.meal.dto.response.MealResponse;
import com.fit.nufit.member.domain.Member;
import com.fit.nufit.member.domain.MemberRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class MealServiceTest {

    @Autowired
    private MealService mealService;

    @Autowired
    private MemberRepository memberRepository;

    @Test
    void 식사를_생성한다() {
        // given
        Member member = memberRepository.save(new Member("근우@gmail.com"));
        MealCreateRequest request = new MealCreateRequest(MealType.BREAKFAST);

        // when
        MealResponse response = mealService.save(member.getId(), request);

        // then
        assertThat(response.getMemberId()).isEqualTo(member.getId());
    }
}
