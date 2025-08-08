import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersRepository } from './orders.repository';
import { Orders } from 'src/entities/orders.entity';
import { OrderDetails } from 'src/entities/orderdetails.entity';
import { Users } from 'src/entities/user.entity';
import { Products } from 'src/entities/products.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Orders, OrderDetails, Users, Products])],
  controllers: [OrdersController],
  providers: [OrdersService, OrdersRepository],
})
export class OrdersModule {}
