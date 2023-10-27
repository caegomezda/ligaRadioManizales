import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstatutosLigaComponent } from './estatutos-liga.component';

describe('EstatutosLigaComponent', () => {
  let component: EstatutosLigaComponent;
  let fixture: ComponentFixture<EstatutosLigaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstatutosLigaComponent]
    });
    fixture = TestBed.createComponent(EstatutosLigaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
