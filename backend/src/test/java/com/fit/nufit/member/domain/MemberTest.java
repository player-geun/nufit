package com.fit.nufit.member.domain;

import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

class MemberTest {

    @Test
    void 목표_칼로리를_계산한다() {
        // given
        Member member = new Member("이근우", "geunwoo@gmail", "1", Role.USER,
                Sex.MAN, 26, 181, 65, ActivityAmount.LOWER);

        // when
        int result = member.calculateGoalCalorie();

        // then
        assertThat(result).isEqualTo(member.calculateGoalCalorie());
    }
}
