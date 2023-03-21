import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecimalBinarioComponent } from './decimal-binario.component';

describe('DecimalBinarioComponent', () => {
  let component: DecimalBinarioComponent;
  let fixture: ComponentFixture<DecimalBinarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecimalBinarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecimalBinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
