package testbe.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import testbe.model.Product;
import testbe.repository.ProductRepository;

import java.util.List;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    /* Create product */
    public Product createProduct(Product product) {
        return this.productRepository.save(product);
    }

    /* Get all */
    public List<Product> getAll() {
        return this.productRepository.findAll();
    }

    /* Get product by id */
    public Product getProductById(Long id) {
        return this.productRepository.findById(id).orElse(null);
    }
}
