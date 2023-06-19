import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVaccinesDetailsComponent } from './add-vaccines-details.component';

describe('AddVaccinesDetailsComponent', () => {
  let component: AddVaccinesDetailsComponent;
  let fixture: ComponentFixture<AddVaccinesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVaccinesDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVaccinesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
