import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraKWHComponent } from './calculadora-kwh.component';

describe('CalculadoraKWHComponent', () => {
  let component: CalculadoraKWHComponent;
  let fixture: ComponentFixture<CalculadoraKWHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoraKWHComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraKWHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
