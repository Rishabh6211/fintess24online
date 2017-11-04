import { TestBed, inject } from '@angular/core/testing';

import { CenterdetailService } from './centerdetail.service';

describe('CenterdetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CenterdetailService]
    });
  });

  it('should ...', inject([CenterdetailService], (service: CenterdetailService) => {
    expect(service).toBeTruthy();
  }));
});
