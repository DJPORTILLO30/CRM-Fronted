import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallsPageComponent } from './calls-page.component';

describe('CallsPageComponent', () => {
  let component: CallsPageComponent;
  let fixture: ComponentFixture<CallsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
