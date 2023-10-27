import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestrasRedesComponent } from './nuestras-redes.component';

describe('NuestrasRedesComponent', () => {
  let component: NuestrasRedesComponent;
  let fixture: ComponentFixture<NuestrasRedesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuestrasRedesComponent]
    });
    fixture = TestBed.createComponent(NuestrasRedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
