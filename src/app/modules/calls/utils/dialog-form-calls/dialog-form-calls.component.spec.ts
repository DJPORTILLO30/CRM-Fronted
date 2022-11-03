import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFormCallsComponent } from './dialog-form-calls.component';

describe('DialogFormCallsComponent', () => {
  let component: DialogFormCallsComponent;
  let fixture: ComponentFixture<DialogFormCallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogFormCallsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogFormCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
