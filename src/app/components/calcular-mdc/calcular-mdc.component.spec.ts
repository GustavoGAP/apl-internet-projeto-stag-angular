import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcularMDCComponent } from './calcular-mdc.component';

describe('CalcularMDCComponent', () => {
  let component: CalcularMDCComponent;
  let fixture: ComponentFixture<CalcularMDCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcularMDCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcularMDCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
