import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletinesComponent } from './boletines.component';

describe('BoletinesComponent', () => {
  let component: BoletinesComponent;
  let fixture: ComponentFixture<BoletinesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoletinesComponent]
    });
    fixture = TestBed.createComponent(BoletinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
