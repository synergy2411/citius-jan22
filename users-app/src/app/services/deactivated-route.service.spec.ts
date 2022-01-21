import { TestBed } from '@angular/core/testing';

import { DeactivatedRouteService } from './deactivated-route.service';

describe('DeactivatedRouteService', () => {
  let service: DeactivatedRouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeactivatedRouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
