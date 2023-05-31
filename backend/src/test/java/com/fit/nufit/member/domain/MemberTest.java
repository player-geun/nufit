package com.fit.nufit.member.domain;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

class MemberTest {

    private Member member;

    @BeforeEach
    void setUp() {
        member = new Member("이근우", "geunwoo@gmail", "1", Role.USER,
                Sex.MAN, 26, 181, 65, ActivityAmount.LOWER);
    }

    @Test
    void 목표_칼로리를_계산한다() {
        // given & when
        int result = member.calculateGoalCalorie();

        // then
        assertThat(result).isEqualTo((int) Math.round((181 - 100) * 0.9 * 25));
    }

    @Test
    void 목표_탄수화물을_계산한다() {
        // given & when
        int result = member.calculateGoalCarbohydrate();

        // then
        assertThat(result).isEqualTo((int) Math.round((181 - 100) * 0.9 * 25));
    }
}
