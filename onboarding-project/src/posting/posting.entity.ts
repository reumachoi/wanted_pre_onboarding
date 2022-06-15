import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('posting')
export class Posting {
  @PrimaryGeneratedColumn()
  idx: string;

  @Column()
  companyId: number;

  @Column()
  companyName: string;

  @Column()
  country: string;

  @Column()
  area: string;

  @Column()
  position: string;

  @Column()
  compensation: number;

  @Column()
  content: string;

  @Column()
  stack: string;
}
