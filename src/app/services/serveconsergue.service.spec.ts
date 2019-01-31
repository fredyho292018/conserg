import { TestBed } from '@angular/core/testing';

import { ServeconsergueService } from './serveconsergue.service';

describe('ServeconsergueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServeconsergueService = TestBed.get(ServeconsergueService);
    expect(service).toBeTruthy();
  });
});
