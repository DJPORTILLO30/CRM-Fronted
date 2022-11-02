import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterRolesModalComponent } from './register-roles-modal.component';

describe('RegisterRolesModalComponent', () => {
  let component: RegisterRolesModalComponent;
  let fixture: ComponentFixture<RegisterRolesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterRolesModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterRolesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
