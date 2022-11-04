import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDataBussinesComponent } from './dialog-data-bussines.component';

describe('DialogDataBussinesComponent', () => {
  let component: DialogDataBussinesComponent;
  let fixture: ComponentFixture<DialogDataBussinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDataBussinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDataBussinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
