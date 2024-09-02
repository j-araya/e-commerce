import { ProductCondition } from "../entities/product.entity";

export class CreateProductDto {
    name: string;
    description: string;
    price: number;
    condition: ProductCondition;
    stock: number;
}
