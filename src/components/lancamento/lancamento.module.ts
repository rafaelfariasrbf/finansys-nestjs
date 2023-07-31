import { Module } from '@nestjs/common';
import { LancamentoService } from './lancamento.service';
import { LancamentoController } from './lancamento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lancamento } from './entities/lancamento.entity';

@Module({
  imports: [LancamentoModule, TypeOrmModule.forFeature([Lancamento])],
  controllers: [LancamentoController],
  providers: [LancamentoService],
})
export class LancamentoModule {}
