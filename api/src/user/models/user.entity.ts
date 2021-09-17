import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn({unsigned: true})
    id: number;

    @Column()
    name: string;

    @Index()
    @Column({unique: true})
    userName: string;
}