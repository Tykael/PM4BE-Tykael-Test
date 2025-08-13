import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './products.repository';
import { Products } from './entities/products.entity';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductsRepository) {}

  getProducts(page: number, limit: number) {
    return this.productRepository.getProducts(page, limit);
  }

  addProducts() {
    return this.productRepository.addProducts();
  }

  updateProduct(id: string, product: Products) {
    return this.productRepository.updateProduct(id, product);
  }
}
