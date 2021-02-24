import { Test, TestingModule } from '@nestjs/testing';
import { TarifResolver } from './tarif.resolver';

describe('TarifResolver', () => {
  let resolver: TarifResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TarifResolver],
    }).compile();

    resolver = module.get<TarifResolver>(TarifResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
