import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
  PaginateQuery,
  Paginated,
  paginate,
  Paginate,
  FilterOperator,
} from 'nestjs-paginate';
import { Lancamento } from './entities/lancamento.entity';
import { CreateLancamentoDto } from './dto/create-lancamento.dto';
import { UpdateLancamentoDto } from './dto/update-lancamento.dto';

@Injectable()
export class LancamentoService {
  constructor(
    @InjectRepository(Lancamento)
    private repository: Repository<Lancamento>,
  ) {}
  async findAll(query: PaginateQuery): Promise<Paginated<Lancamento>> {
    return paginate(query, this.repository, {
      relations: ['categoriaLancamento', 'usuario'],
      sortableColumns: ['id', 'descricao', 'valor', 'transacao'],
      defaultSortBy: [['data', 'DESC']],
      filterableColumns: { transacao: [FilterOperator.EQ] },
      searchableColumns: [
        'descricao',
        'valor',
        'transacao',
        'usuario.nome',
        'categoriaLancamento.nome',
      ],
    });
  }

  findOne(id: number) {
    return this.repository.findOneBy({
      id: id,
    });
  }

  create(createLancamentoDto: CreateLancamentoDto) {
    return this.repository.save(createLancamentoDto);
  }

  update(id: number, updateLancamentoDto: UpdateLancamentoDto) {
    return this.repository.update(id, updateLancamentoDto);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
