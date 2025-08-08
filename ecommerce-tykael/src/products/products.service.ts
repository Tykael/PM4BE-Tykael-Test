import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './products.repository';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductsRepository) {}

  getProducts(page: number, limit: number) {
    return this.productRepository.getProducts(page, limit);
  }

  addProducts() {
    return this.productRepository.addProducts();
  }
}
