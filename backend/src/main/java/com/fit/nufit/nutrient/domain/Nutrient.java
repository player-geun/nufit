package com.fit.nufit.nutrient.domain;

import com.fit.nufit.common.BaseEntity;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

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

    @OneToMany(mappedBy = "parentNutrient")
    private List<Nutrient> childNutrients = new ArrayList<>();

    @Column(name = "nutrient_name")
    private String name;

    @Enumerated(value = EnumType.STRING)
    @Column(name = "nutrient_unit", nullable = false)
    private NutrientUnit unit;

    public Nutrient(String name, NutrientUnit unit) {
        this.name = name;
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
