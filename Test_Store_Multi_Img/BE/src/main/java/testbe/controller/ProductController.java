package testbe.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import testbe.model.ImageProduct;
import testbe.model.Product;
import testbe.service.ImageProductService;
import testbe.service.ProductService;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
public class ProductController {
    @Autowired
    private ProductService productService;

    @Autowired
    private ImageProductService imageProductService;

    /* Create product */
    @RequestMapping(value = "create-product", method = RequestMethod.POST)
    public ResponseEntity<Product> createProduct(@RequestBody Product product) {
        Product productCreated = productService.createProduct(product);
        return new ResponseEntity<>(productCreated , HttpStatus.OK);
    }

    /*Get all product */
    @RequestMapping(value = "products" , method = RequestMethod.GET)
    public ResponseEntity<List<Product>> getProducts() {
        List<Product> products = this.productService.getAll();
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    /* Get product by id */
    @RequestMapping(value = "product/{id}", method = RequestMethod.GET)
    public ResponseEntity<Product> getProductById(@PathVariable Long id) {
        Product product =this.productService.getProductById(id);
        return new ResponseEntity<>(product , HttpStatus.OK);
    }

    /* Create img product */
    @RequestMapping(value = "create-images", method = RequestMethod.POST)
    public ResponseEntity<ImageProduct> createImages(@RequestBody ImageProduct imageProduct) {
        List<ImageProduct> imageProductList = new ArrayList<>();

        /* Save each picture */
        ImageProduct img = imageProductService.save(imageProduct);

        return new ResponseEntity<>(img , HttpStatus.OK);
    }
}
