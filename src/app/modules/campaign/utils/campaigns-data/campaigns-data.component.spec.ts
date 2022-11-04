import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignsDataComponent } from './campaigns-data.component';

describe('CampaignsDataComponent', () => {
  let component: CampaignsDataComponent;
  let fixture: ComponentFixture<CampaignsDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignsDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampaignsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
