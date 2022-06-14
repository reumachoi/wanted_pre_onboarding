import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('posting')
export class Posting {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  position: string;

  @Column()
  compensation: number;

  @Column()
  content: string;

  @Column()
  stack: string;
}
