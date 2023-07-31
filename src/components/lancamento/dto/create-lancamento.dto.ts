import { CategoriaLancamento } from 'src/components/categoria-lancamento/entities/categoria-lancamento.entity';
import { Transacao } from 'src/enums/transacao.enum';
import { User } from 'src/components/users/entities/user.entity';

export class CreateLancamentoDto {
  descricao: string;
  valor: number;
  transacao: Transacao;
  categoriaLancamento: CategoriaLancamento;
  usuario: User;
  data: Date;
}
