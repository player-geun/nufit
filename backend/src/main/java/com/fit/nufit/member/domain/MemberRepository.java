package com.fit.nufit.member.domain;

import com.fit.nufit.member.exception.NoSuchMemberException;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {

    default Member getById(Long id) {
        return this.findById(id)
                .orElseThrow(NoSuchMemberException::new);
    }
}
