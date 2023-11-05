package com.fit.nufit.member.domain;

import com.fit.nufit.common.exception.NoSuchEntityException;
import com.fit.nufit.member.exception.NoSuchMemberException;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {

    default Member getById(Long id) {
        return this.findById(id)
                .orElseThrow(NoSuchMemberException::new);
    }

    default Member getBySocialId(String socialId) {
        return this.findFirstBySocialId(socialId)
                .orElseThrow(NoSuchMemberException::new);
    }

    Optional<Member> findFirstBySocialId(String socialId);

    Optional<Member> findByEmail(String email);

    default Member getByEmail(String email) {
        return findByEmail(email)
                .orElseThrow(() -> new NoSuchEntityException("해당 이메일의 회원이 존재하지 않습니다."));
    }

    Optional<Member> findBySocialTypeAndSocialId(SocialType socialType, String socialId);

    default Member getBySocialTypeAndSocialId(SocialType socialType, String socialId) {
        return findBySocialTypeAndSocialId(socialType, socialId)
                .orElseThrow(() -> new NoSuchEntityException("해당 소셜타입과 소셜 아이디의 회원이 존재하지 않습니다."));
    }
}
