import { Test, TestingModule } from '@nestjs/testing';
import { CategoriaLancamentoService } from './categoria-lancamento.service';

describe('CategoriaLancamentoService', () => {
  let service: CategoriaLancamentoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriaLancamentoService],
    }).compile();

    service = module.get<CategoriaLancamentoService>(CategoriaLancamentoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
