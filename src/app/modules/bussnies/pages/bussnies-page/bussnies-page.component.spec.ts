import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BussniesPageComponent } from './bussnies-page.component';

describe('BussniesPageComponent', () => {
  let component: BussniesPageComponent;
  let fixture: ComponentFixture<BussniesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BussniesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BussniesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
