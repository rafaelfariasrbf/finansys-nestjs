import { Lancamento } from 'src/components/lancamento/entities/lancamento.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CategoriaLancamento {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  nome: string;

  @OneToMany(() => Lancamento, (l) => l.categoriaLancamento)
  lancamento: Lancamento[];
}
