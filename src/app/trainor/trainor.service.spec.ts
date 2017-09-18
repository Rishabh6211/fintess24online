import { TestBed, inject } from '@angular/core/testing';

import { TrainorService } from './trainor.service';

describe('TrainorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrainorService]
    });
  });

  it('should ...', inject([TrainorService], (service: TrainorService) => {
    expect(service).toBeTruthy();
  }));
});
