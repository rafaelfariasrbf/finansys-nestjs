import { Injectable } from '@nestjs/common';
import { CreateContaDto } from './dto/create-conta.dto';
import { UpdateContaDto } from './dto/update-conta.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Conta } from './entities/conta.entity';
import { Repository } from 'typeorm';
import { PaginateQuery, Paginated, paginate } from 'nestjs-paginate';

@Injectable()
export class ContaService {
  constructor(
    @InjectRepository(Conta)
    private repository: Repository<Conta>,
  ) {}
  create(createContaDto: CreateContaDto) {
    return this.repository.save(createContaDto);
  }

  findAll(query: PaginateQuery): Promise<Paginated<Conta>> {
    return paginate(query, this.repository, {
      sortableColumns: ['id', 'descricao'],
      defaultSortBy: [['id', 'ASC']],
      searchableColumns: ['descricao'],
    });
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id: id });
  }

  update(id: number, updateContaDto: UpdateContaDto) {
    return this.repository.update(id, updateContaDto);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
