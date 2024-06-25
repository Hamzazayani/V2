import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableManagmentComponent } from './table-managment.component';

describe('TableManagmentComponent', () => {
  let component: TableManagmentComponent;
  let fixture: ComponentFixture<TableManagmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableManagmentComponent]
    });
    fixture = TestBed.createComponent(TableManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
