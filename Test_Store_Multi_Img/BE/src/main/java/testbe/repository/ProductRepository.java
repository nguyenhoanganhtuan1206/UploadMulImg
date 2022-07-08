package testbe.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import testbe.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product , Long> {
}
