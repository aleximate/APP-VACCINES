import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinesCenterComponent } from './vaccines-center.component';

describe('VaccinesCenterComponent', () => {
  let component: VaccinesCenterComponent;
  let fixture: ComponentFixture<VaccinesCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinesCenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VaccinesCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
