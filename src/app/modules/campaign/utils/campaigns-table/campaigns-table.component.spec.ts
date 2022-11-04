import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignsTableComponent } from './campaigns-table.component';

describe('CampaignsTableComponent', () => {
  let component: CampaignsTableComponent;
  let fixture: ComponentFixture<CampaignsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampaignsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
