import { CategoriaLancamento } from 'src/components/categoria-lancamento/entities/categoria-lancamento.entity';
import { User } from 'src/components/users/entities/user.entity';
import { Transacao } from '../../../enums/transacao.enum';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Lancamento {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: false })
  descricao: string;

  @Column({ nullable: false })
  valor: number;

  @Column({ nullable: false })
  transacao: Transacao;

  @ManyToOne(() => CategoriaLancamento, (c) => c.lancamento)
  categoriaLancamento: CategoriaLancamento;

  @ManyToOne(() => User, (user) => user.id)
  usuario: User;

  @Column({ nullable: false, default: () => 'NOW()' })
  data: Date;
}
