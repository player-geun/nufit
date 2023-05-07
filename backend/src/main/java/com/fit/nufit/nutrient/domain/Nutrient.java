package com.fit.nufit.nutrient.domain;

import com.fit.nufit.common.BaseEntity;
import com.fit.nufit.food.domain.Food;
import com.fit.nufit.food.domain.FoodNutrient;
import com.fit.nufit.nutrient.exception.AlreadyExistsChildNutrientException;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Comment;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
public class Nutrient extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "nutrient_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "parent_nutrient_id", referencedColumnName = "nutrient_id")
    private Nutrient parentNutrient;

    @OneToMany(mappedBy = "parentNutrient", cascade = CascadeType.ALL)
    private List<Nutrient> childNutrients = new ArrayList<>();

    @Column(name = "nutrient_name")
    private String name;

    @Column(name = "nutrient_calorie")
    private int calorie;

    @Enumerated(value = EnumType.STRING)
    @Column(name = "nutrient_unit", nullable = false)
    private NutrientUnit unit;

    public Nutrient(String name, int calorie, NutrientUnit unit) {
        this.name = name;
        this.calorie = calorie;
        this.unit = unit;
    }

    public void setParentNutrient(Nutrient parentNutrient) {
        if (this.parentNutrient != null) {
            this.parentNutrient.getChildNutrients().remove(this);
        }
        this.parentNutrient = parentNutrient;
        parentNutrient.getChildNutrients().add(this);
    }

}
