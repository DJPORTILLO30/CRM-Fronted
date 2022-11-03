import { TestBed } from '@angular/core/testing';

import { ConectCampaignsService } from './conect-campaigns.service';

describe('ConectCampaignsService', () => {
  let service: ConectCampaignsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConectCampaignsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
