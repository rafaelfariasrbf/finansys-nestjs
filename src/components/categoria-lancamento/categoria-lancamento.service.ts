import { Injectable } from '@nestjs/common';
import { CreateCategoriaLancamentoDto } from './dto/create-categoria-lancamento.dto';
import { UpdateCategoriaLancamentoDto } from './dto/update-categoria-lancamento.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriaLancamento } from './entities/categoria-lancamento.entity';
import { Repository } from 'typeorm';
import { PaginateQuery, Paginated, paginate } from 'nestjs-paginate';

@Injectable()
export class CategoriaLancamentoService {
  constructor(
    @InjectRepository(CategoriaLancamento)
    private categoriaRepository: Repository<CategoriaLancamento>,
  ) {}

  create(createCategoriaLancamentoDto: CreateCategoriaLancamentoDto) {
    return this.categoriaRepository.save(createCategoriaLancamentoDto);
  }

  findAllPaginated(
    query: PaginateQuery,
  ): Promise<Paginated<CategoriaLancamento>> {
    return paginate(query, this.categoriaRepository, {
      sortableColumns: ['nome'],
      defaultSortBy: [['nome', 'ASC']],
      searchableColumns: ['nome'],
      select: ['nome'],
    });
  }

  findAll() {
    return this.categoriaRepository.find();
  }

  findOne(id: number) {
    return this.categoriaRepository.findOneBy({ id: id });
  }

  update(
    id: number,
    updateCategoriaLancamentoDto: UpdateCategoriaLancamentoDto,
  ) {
    return this.categoriaRepository.update(id, updateCategoriaLancamentoDto);
  }

  remove(id: number) {
    return this.categoriaRepository.delete(id);
  }
}
