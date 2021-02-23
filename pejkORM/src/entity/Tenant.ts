import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity()
export class Tenant {

    @PrimaryGeneratedColumn()
    Tenant_ID: number;

    @Column()
    First_Name: string;

    @Column()
    Last_Name: string;

    @Column()
    Age: number;

    @Column()
    Username: string;

    @Column()
    Password: string;

}
