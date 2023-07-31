import { Module } from '@nestjs/common';
import { CategoriaLancamentoService } from './categoria-lancamento.service';
import { CategoriaLancamentoController } from './categoria-lancamento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaLancamento } from './entities/categoria-lancamento.entity';

@Module({
  imports: [
    CategoriaLancamentoModule,
    TypeOrmModule.forFeature([CategoriaLancamento]),
  ],
  controllers: [CategoriaLancamentoController],
  providers: [CategoriaLancamentoService],
})
export class CategoriaLancamentoModule {}
