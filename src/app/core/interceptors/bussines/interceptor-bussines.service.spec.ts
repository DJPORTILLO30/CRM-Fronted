import { TestBed } from '@angular/core/testing';

import { InterceptorBussinesService } from './interceptor-bussines.service';

describe('InterceptorBussinesService', () => {
  let service: InterceptorBussinesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterceptorBussinesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
