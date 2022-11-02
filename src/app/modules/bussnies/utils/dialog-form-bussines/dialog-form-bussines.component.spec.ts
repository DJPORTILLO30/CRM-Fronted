import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFormBussinesComponent } from './dialog-form-bussines.component';

describe('DialogFormBussinesComponent', () => {
  let component: DialogFormBussinesComponent;
  let fixture: ComponentFixture<DialogFormBussinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogFormBussinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogFormBussinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
