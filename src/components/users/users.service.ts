import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { PaginateQuery, Paginated, paginate } from 'nestjs-paginate';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    createUserDto.password = await bcrypt.hash(createUserDto.password, 10);
    return this.repository.save(createUserDto);
  }

  findAllPaginated(query: PaginateQuery): Promise<Paginated<User>> {
    return paginate(query, this.repository, {
      sortableColumns: ['id', 'nome', 'email'],
      defaultSortBy: [['id', 'ASC']],
      searchableColumns: ['nome', 'email'],
    });
  }

  findAll() {
    return this.repository.find();
  }

  findOneWithLancamentos(id: number) {
    return this.repository.find({
      where: { id: id },
      relations: { lancamentos: true },
    });
  }

  async findOneByEmail(email: string) {
    return this.repository.findOneBy({ email: email });
  }

  async findOne(data: number | any): Promise<User | undefined> {
    return await this.repository.findOne(data);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.repository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
