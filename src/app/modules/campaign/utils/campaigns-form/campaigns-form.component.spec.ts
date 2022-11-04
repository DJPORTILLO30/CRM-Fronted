import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignsFormComponent } from './campaigns-form.component';

describe('CampaignsFormComponent', () => {
  let component: CampaignsFormComponent;
  let fixture: ComponentFixture<CampaignsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampaignsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
