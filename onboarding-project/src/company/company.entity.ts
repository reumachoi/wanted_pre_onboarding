import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('company')
export class Company {
  @PrimaryGeneratedColumn()
  companyId: number;

  @Column()
  companyName: string;

  @Column()
  country: string;

  @Column()
  area: string;
}
