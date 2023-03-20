import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotoesHomeComponent } from './botoes-home.component';

describe('BotoesHomeComponent', () => {
  let component: BotoesHomeComponent;
  let fixture: ComponentFixture<BotoesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotoesHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotoesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
