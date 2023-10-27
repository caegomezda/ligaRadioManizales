import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActaFundacionComponent } from './acta-fundacion.component';

describe('ActaFundacionComponent', () => {
  let component: ActaFundacionComponent;
  let fixture: ComponentFixture<ActaFundacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActaFundacionComponent]
    });
    fixture = TestBed.createComponent(ActaFundacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
