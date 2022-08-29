import { Test, TestingModule } from '@nestjs/testing';
import { CovidController } from './covid.controller';
import { CovidService } from './covid.service';

describe('CovidController', () => {
  let controller: CovidController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CovidController],
      providers: [CovidService],
      
    }).compile();

    controller = module.get<CovidController>(CovidController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
