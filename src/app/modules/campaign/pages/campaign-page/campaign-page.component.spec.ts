import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignPageComponent } from './campaign-page.component';

describe('CampaignPageComponent', () => {
  let component: CampaignPageComponent;
  let fixture: ComponentFixture<CampaignPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampaignPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
