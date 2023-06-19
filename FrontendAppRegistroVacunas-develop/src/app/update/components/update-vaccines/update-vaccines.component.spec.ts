import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVaccinesComponent } from './update-vaccines.component';

describe('UpdateVaccinesComponent', () => {
  let component: UpdateVaccinesComponent;
  let fixture: ComponentFixture<UpdateVaccinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVaccinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateVaccinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
