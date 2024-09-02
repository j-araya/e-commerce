import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto'; 
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  create(createProductDto: CreateProductDto) {
    return this.productsRepository.create(createProductDto)
  }

  findAll() {
    console.log("quei");
    
    return this.productsRepository.find()
  }

  findOne(id: number) {
    return this.productsRepository.findOneBy({ id })
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.productsRepository.update({id}, updateProductDto)
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
