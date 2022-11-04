import { TestBed } from '@angular/core/testing';

import { CampaignService } from './campaign.service';

describe('CampaignService', () => {
  let service: CampaignService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampaignService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
