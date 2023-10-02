package com.fit.nufit.member.domain;

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
}
