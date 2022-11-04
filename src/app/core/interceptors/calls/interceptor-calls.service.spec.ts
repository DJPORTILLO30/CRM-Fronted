import { TestBed } from '@angular/core/testing';

import { InterceptorCallsService } from './interceptor-calls.service';

describe('InterceptorCallsService', () => {
  let service: InterceptorCallsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterceptorCallsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
