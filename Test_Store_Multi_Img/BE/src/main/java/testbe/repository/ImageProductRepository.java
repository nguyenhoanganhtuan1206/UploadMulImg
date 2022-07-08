package testbe.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import testbe.model.ImageProduct;

@Repository
public interface ImageProductRepository extends JpaRepository<ImageProduct , Long> {
}
