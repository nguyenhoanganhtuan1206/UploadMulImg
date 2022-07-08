package testbe.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import testbe.model.ImageProduct;
import testbe.repository.ImageProductRepository;

@Service
public class ImageProductService {
    @Autowired
    private ImageProductRepository imageProductRepository;

    /* Create image */
    public ImageProduct save(ImageProduct imageProduct) {
        return this.imageProductRepository.save(imageProduct);
    }
}
