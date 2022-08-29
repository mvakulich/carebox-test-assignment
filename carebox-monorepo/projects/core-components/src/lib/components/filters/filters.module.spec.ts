import { CiltersModule } from './filters.module';

describe('CiltersModule', () => {
  let ciltersModule: CiltersModule;

  beforeEach(() => {
    ciltersModule = new CiltersModule();
  });

  it('should create an instance', () => {
    expect(ciltersModule).toBeTruthy();
  });
});
