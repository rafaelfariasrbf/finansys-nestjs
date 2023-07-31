import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoriaLancamentoDto } from './create-categoria-lancamento.dto';

export class UpdateCategoriaLancamentoDto extends PartialType(
  CreateCategoriaLancamentoDto,
) {
  nome: string;
  icone: string;
}
