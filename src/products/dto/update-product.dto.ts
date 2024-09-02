import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { ProductCondition } from '../entities/product.entity';

export class UpdateProductDto extends PartialType(CreateProductDto) {
}
