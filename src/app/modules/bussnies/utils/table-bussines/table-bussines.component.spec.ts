import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBussinesComponent } from './table-bussines.component';

describe('TableBussinesComponent', () => {
  let component: TableBussinesComponent;
  let fixture: ComponentFixture<TableBussinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableBussinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableBussinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
