import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifasPagosComponent } from './tarifas-pagos.component';

describe('TarifasPagosComponent', () => {
  let component: TarifasPagosComponent;
  let fixture: ComponentFixture<TarifasPagosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TarifasPagosComponent]
    });
    fixture = TestBed.createComponent(TarifasPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
