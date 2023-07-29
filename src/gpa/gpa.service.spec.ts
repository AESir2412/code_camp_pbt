import { Test, TestingModule } from '@nestjs/testing';
import { GpaService } from './gpa.service';

describe('GpaService', () => {
  let service: GpaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GpaService],
    }).compile();

    service = module.get<GpaService>(GpaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
