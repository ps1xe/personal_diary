import { User } from "src/auth/entities/auth.entity";
import { BaseEntity } from "src/common/entities/base.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Page extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    content: string;

    @ManyToOne(() => User, (user) => user.pages)
    user: User;

    @Column()
    userId: User['id'];


}