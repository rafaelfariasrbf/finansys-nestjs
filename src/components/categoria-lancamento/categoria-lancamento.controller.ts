import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CategoriaLancamentoService } from './categoria-lancamento.service';
import { CreateCategoriaLancamentoDto } from './dto/create-categoria-lancamento.dto';
import { UpdateCategoriaLancamentoDto } from './dto/update-categoria-lancamento.dto';
import { Paginate, PaginateQuery, Paginated } from 'nestjs-paginate';
import { CategoriaLancamento } from './entities/categoria-lancamento.entity';

@Controller('categoria-lancamento')
export class CategoriaLancamentoController {
  constructor(
    private readonly categoriaLancamentoService: CategoriaLancamentoService,
  ) {}

  @Post()
  create(@Body() createCategoriaLancamentoDto: CreateCategoriaLancamentoDto) {
    return this.categoriaLancamentoService.create(createCategoriaLancamentoDto);
  }

  @Get('paginated')
  findAllPaginated(
    @Paginate() query: PaginateQuery,
  ): Promise<Paginated<CategoriaLancamento>> {
    return this.categoriaLancamentoService.findAllPaginated(query);
  }

  @Get()
  findAll() {
    return this.categoriaLancamentoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriaLancamentoService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoriaLancamentoDto: UpdateCategoriaLancamentoDto,
  ) {
    return this.categoriaLancamentoService.update(
      +id,
      updateCategoriaLancamentoDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriaLancamentoService.remove(+id);
  }
}
