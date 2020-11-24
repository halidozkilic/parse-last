import { TestBed } from '@angular/core/testing';

import { ParsService } from './pars.service';

describe('ParsService', () => {
  let service: ParsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
