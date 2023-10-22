package com.fit.nufit.member.presentation;

import com.fit.nufit.auth.dto.LoginMember;
import com.fit.nufit.member.dto.request.MemberDetailRequest;
import com.fit.nufit.member.dto.response.MemberGoalResponse;
import com.fit.nufit.member.application.MemberService;
import com.fit.nufit.member.dto.response.MemberResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RequestMapping("/api/members")
@RequiredArgsConstructor
@RestController
public class MemberController {

    private final MemberService memberService;

    @GetMapping("/me/details")
    public ResponseEntity<MemberResponse> findMe(@AuthenticationPrincipal LoginMember member) {
        MemberResponse response = memberService.findById(member.getId());
        return ResponseEntity.ok(response);
    }

    @GetMapping("/me/goals")
    public ResponseEntity<MemberGoalResponse> findGoals(@AuthenticationPrincipal LoginMember member) {
        MemberGoalResponse response = memberService.findGoalsById(member.getId());
        return ResponseEntity.ok(response);
    }

    @PatchMapping("/me/details")
    public ResponseEntity<Void> updateDetail(@AuthenticationPrincipal LoginMember member,
                                             @RequestBody MemberDetailRequest request) {
        memberService.updateDetailById(member.getId(), request);
        return ResponseEntity.noContent().build();
    }

    private String getSocialId(OAuth2User user) {
        return Optional.ofNullable(user.getAttributes().get("id")).orElse("").toString();
    }
}
