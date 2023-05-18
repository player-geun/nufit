package com.fit.nufit.food.domain;

import com.fit.nufit.common.BaseEntity;
import com.fit.nufit.food.dto.request.FoodCreateRequest;
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
    @Column(name = "food_unit")
    private FoodUnit unit;

    @Enumerated(value = EnumType.STRING)
    @Column(name = "food_type", nullable = false)
    private FoodType type;

    @Column(name = "food_calorie")
    private double calorie;

    public Food(String name, int amount, FoodUnit unit, FoodType type, double calorie) {
        this.name = name;
        this.amount = amount;
        this.unit = unit;
        this.type = type;
        this.calorie = calorie;
    }

    public Food(String name, int amount, FoodUnit unit, String brand, FoodType foodType, double calorie) {
        this.name = name;
        this.brand = brand;
        this.amount = amount;
        this.unit = unit;
        this.type = foodType;
        this.calorie = calorie;
    }

    public static Food toEntity(FoodCreateRequest request) {
        return new Food(request.getName(), request.getAmount(), FoodUnit.from(request.getUnit()),
                request.getBrand(), FoodType.from(request.getType()), request.getCalorie());
    }
}
