import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterUserModalComponent } from './register-user-modal.component';

describe('RegisterUserModalComponent', () => {
  let component: RegisterUserModalComponent;
  let fixture: ComponentFixture<RegisterUserModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterUserModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterUserModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
