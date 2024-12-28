import { TestBed } from '@angular/core/testing';

import { AlgoServiceService } from './algo-service.service';

describe('AlgoServiceService', () => {
  let service: AlgoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlgoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
