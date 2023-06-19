import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVaccinesCenterComponent } from './update-vaccines-center.component';

describe('UpdateVaccinesCenterComponent', () => {
  let component: UpdateVaccinesCenterComponent;
  let fixture: ComponentFixture<UpdateVaccinesCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVaccinesCenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateVaccinesCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
