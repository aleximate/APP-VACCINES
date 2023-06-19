import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterVaccinesComponent } from './add-vaccines.component';

describe('RegisterVaccinesComponent', () => {
  let component: RegisterVaccinesComponent;
  let fixture: ComponentFixture<RegisterVaccinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterVaccinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterVaccinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
