import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Conta {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column({ nullable: false })
  descricao: string;
}
