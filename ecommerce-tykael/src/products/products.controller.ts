import { Controller, Get, Query } from '@nestjs/common';
import { ProductService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getProducts(@Query('page') page: string, @Query('limit') limit: string) {
    if (page && limit)
      return this.productService.getProducts(Number(page), Number(limit));
    return this.productService.getProducts(Number(1), Number(5));
  }
  @Get('seeder')
  addProducts() {
    return this.productService.addProducts();
  }
}
