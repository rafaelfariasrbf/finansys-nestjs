import { Module } from '@nestjs/common';
import { ContaService } from './conta.service';
import { ContaController } from './conta.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Conta } from './entities/conta.entity';

@Module({
  imports: [ContaModule, TypeOrmModule.forFeature([Conta])],
  controllers: [ContaController],
  providers: [ContaService],
})
export class ContaModule {}
