import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonsTablesComponent } from './persons-tables.component';

describe('PersonsTablesComponent', () => {
  let component: PersonsTablesComponent;
  let fixture: ComponentFixture<PersonsTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonsTablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonsTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
