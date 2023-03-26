import { TestBed } from '@angular/core/testing';

import { SportsCarsService } from './sports-cars.service';

describe('SportsCarsService', () => {
  let service: SportsCarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SportsCarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
