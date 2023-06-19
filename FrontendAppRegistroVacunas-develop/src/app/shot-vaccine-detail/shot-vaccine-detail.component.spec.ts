import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShotVaccineDetailComponent } from './shot-vaccine-detail.component';

describe('ShotVaccineDetailComponent', () => {
  let component: ShotVaccineDetailComponent;
  let fixture: ComponentFixture<ShotVaccineDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShotVaccineDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShotVaccineDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
