import { Exclude } from "class-transformer";
import { BaseEntity } from "src/common/entities/base.entity";
import { Page } from "src/pages/entities/page.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique: true })
    login: string;

    @Exclude()
    @Column()
    password: string;

    @OneToMany(() => Page, (page) => page.user)
    pages: Page[];

}