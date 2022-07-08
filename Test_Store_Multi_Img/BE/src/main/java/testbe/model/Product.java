package testbe.model;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @OneToMany(mappedBy = "product")
    private Set<ImageProduct> imageProducts;

    public Product() {}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<ImageProduct> getImageProducts() {
        return imageProducts;
    }

    public void setImageProducts(Set<ImageProduct> imageProducts) {
        this.imageProducts = imageProducts;
    }
}
