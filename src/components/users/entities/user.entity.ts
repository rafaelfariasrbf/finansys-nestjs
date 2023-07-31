import { Lancamento } from 'src/components/lancamento/entities/lancamento.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: false })
  nome: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  password?: string;

  @Column({ default: null, type: 'datetime' })
  created_at?: Date;

  @Column({ default: null, type: 'datetime' })
  updated_at?: Date;

  @OneToMany(() => Lancamento, (lancamento) => lancamento.usuario)
  lancamentos: Lancamento[];
}
