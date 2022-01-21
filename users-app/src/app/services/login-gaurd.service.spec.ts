import { TestBed } from '@angular/core/testing';

import { LoginGaurdService } from './login-gaurd.service';

describe('LoginGaurdService', () => {
  let service: LoginGaurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginGaurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
