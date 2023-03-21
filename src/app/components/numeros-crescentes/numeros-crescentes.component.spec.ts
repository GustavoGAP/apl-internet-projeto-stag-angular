import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumerosCrescentesComponent } from './numeros-crescentes.component';

describe('NumerosCrescentesComponent', () => {
  let component: NumerosCrescentesComponent;
  let fixture: ComponentFixture<NumerosCrescentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumerosCrescentesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumerosCrescentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
