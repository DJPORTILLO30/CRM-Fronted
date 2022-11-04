import { TestBed } from '@angular/core/testing';

import { ConectContactService } from './conect-contact.service';

describe('ConectContactService', () => {
  let service: ConectContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConectContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
