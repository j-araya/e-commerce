import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum ProductCondition {
    NEW = 'NEW',
    USED = 'USED',
}

@Entity()
export class Product  {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column({precision: 2})
    price: number

    @Column({ type: "enum", enum: ProductCondition, default: ProductCondition.NEW })
    condition: ProductCondition

    @Column()
    stock: number;
}
