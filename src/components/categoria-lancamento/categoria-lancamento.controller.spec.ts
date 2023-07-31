import { Test, TestingModule } from '@nestjs/testing';
import { CategoriaLancamentoController } from './categoria-lancamento.controller';
import { CategoriaLancamentoService } from './categoria-lancamento.service';

describe('CategoriaLancamentoController', () => {
  let controller: CategoriaLancamentoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriaLancamentoController],
      providers: [CategoriaLancamentoService],
    }).compile();

    controller = module.get<CategoriaLancamentoController>(
      CategoriaLancamentoController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
