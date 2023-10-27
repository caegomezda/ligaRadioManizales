import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuntaDirectivaComponent } from './junta-directiva.component';

describe('JuntaDirectivaComponent', () => {
  let component: JuntaDirectivaComponent;
  let fixture: ComponentFixture<JuntaDirectivaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JuntaDirectivaComponent]
    });
    fixture = TestBed.createComponent(JuntaDirectivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
