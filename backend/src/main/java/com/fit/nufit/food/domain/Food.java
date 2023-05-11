package com.fit.nufit.food.domain;

import com.fit.nufit.common.BaseEntity;
import lombok.*;

import javax.persistence.*;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
public class Food extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "food_id")
    private Long id;

    @Column(name = "food_name")
    private String name;

    @Column(name = "food_brand")
    private String brand;

    @Column(name = "food_amount")
    private int amount;

    @Enumerated(value = EnumType.STRING)
    @Column(name = "food_type", nullable = false)
    private FoodType type;

    @Column(name = "food_calorie")
    private int calorie;

    public Food(String name, int amount, String brand, FoodType foodType, int calorie) {
        this.name = name;
        this.brand = brand;
        this.amount = amount;
        this.type = foodType;
        this.calorie = calorie;
    }
}
