import { TestBed } from '@angular/core/testing';

import { BussinesService } from './bussines.service';

describe('BussinesService', () => {
  let service: BussinesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BussinesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
