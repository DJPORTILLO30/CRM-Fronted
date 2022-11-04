import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesCallsComponent } from './tables-calls.component';

describe('TablesCallsComponent', () => {
  let component: TablesCallsComponent;
  let fixture: ComponentFixture<TablesCallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablesCallsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablesCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
