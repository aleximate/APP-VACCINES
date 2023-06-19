import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVaccinesCenterComponent } from './add-vaccines-center.component';

describe('AddVaccinesCenterComponent', () => {
  let component: AddVaccinesCenterComponent;
  let fixture: ComponentFixture<AddVaccinesCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVaccinesCenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVaccinesCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
