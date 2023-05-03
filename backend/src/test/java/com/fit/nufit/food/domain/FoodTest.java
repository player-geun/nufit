package com.fit.nufit.food.domain;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class FoodTest {

    @Test
    void 음식을_생성한다() throws Exception {
        //given & when & then
        assertDoesNotThrow(()->{
            new Food("파스타", 1, null, FoodType.from("western"), 500);
        });
    }


}