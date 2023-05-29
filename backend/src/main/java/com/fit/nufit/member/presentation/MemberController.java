package com.fit.nufit.member.presentation;

import com.fit.nufit.meal.dto.response.MealDetailResponse;
import com.fit.nufit.member.dto.request.MemberDetailRequest;
import com.fit.nufit.member.dto.response.MemberDetailResponse;
import com.fit.nufit.member.service.MemberService;
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
    public ResponseEntity<MemberDetailResponse> findDetail(@AuthenticationPrincipal OAuth2User user) {
        MemberDetailResponse response = memberService.findDetailBySocialId(getSocialId(user));
        return ResponseEntity.ok(response);
    }

    @PatchMapping("/me/details")
    public ResponseEntity<Void> updateDetailBySocialId(@AuthenticationPrincipal OAuth2User user,
                                                       @RequestBody MemberDetailRequest request) {
        memberService.updateDetailBySocialId(getSocialId(user), request);
        return ResponseEntity.noContent().build();
    }

    private String getSocialId(OAuth2User user) {
        return Optional.ofNullable(user.getAttributes().get("id")).orElse("").toString();
    }
}
