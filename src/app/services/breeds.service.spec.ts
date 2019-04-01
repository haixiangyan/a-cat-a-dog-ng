import { TestBed } from '@angular/core/testing';

import { BreedsService } from './breeds.service';

describe('BreedsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BreedsService = TestBed.get(BreedsService);
    expect(service).toBeTruthy();
  });
});
