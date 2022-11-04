import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPermissionModalComponent } from './register-permission-modal.component';

describe('RegisterPermissionModalComponent', () => {
  let component: RegisterPermissionModalComponent;
  let fixture: ComponentFixture<RegisterPermissionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterPermissionModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterPermissionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
