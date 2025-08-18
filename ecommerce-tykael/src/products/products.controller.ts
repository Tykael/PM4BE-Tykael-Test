import {
  Body,
  Controller,
  Get,
  Param,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ProductService } from './products.service';
import { Products } from './entities/products.entity';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from 'src/auth/roles.enum';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { UpdateProductsDto } from './dto/products.dto';

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

  @Put(`:id`)
  @Roles(Role.Admin)
  @UseGuards(AuthGuard, RolesGuard)
  updateProduct(@Param('id') id: string, @Body() product: UpdateProductsDto) {
    return this.productService.updateProduct(id, product);
  }
}
