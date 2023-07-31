import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ContaService } from './conta.service';
import { CreateContaDto } from './dto/create-conta.dto';
import { UpdateContaDto } from './dto/update-conta.dto';
import { Paginate, PaginateQuery, Paginated } from 'nestjs-paginate';
import { Conta } from './entities/conta.entity';

@Controller('contas')
export class ContaController {
  constructor(private readonly contaService: ContaService) {}

  @Post()
  create(@Body() createContaDto: CreateContaDto) {
    return this.contaService.create(createContaDto);
  }

  @Get()
  findAll(@Paginate() query: PaginateQuery): Promise<Paginated<Conta>> {
    return this.contaService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContaDto: UpdateContaDto) {
    return this.contaService.update(+id, updateContaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contaService.remove(+id);
  }
}
