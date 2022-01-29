import { TestBed } from '@angular/core/testing';

import { SujithService } from './sujith.service';

describe('SujithService', () => {
  let service: SujithService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SujithService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
