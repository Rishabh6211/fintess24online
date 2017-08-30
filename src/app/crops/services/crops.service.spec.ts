import { TestBed, inject } from '@angular/core/testing';

import { CropsService } from './crops.service';

describe('CropsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CropsService]
    });
  });

  it('should ...', inject([CropsService], (service: CropsService) => {
    expect(service).toBeTruthy();
  }));
});
