import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeriaManizalesComponent } from './feria-manizales.component';

describe('FeriaManizalesComponent', () => {
  let component: FeriaManizalesComponent;
  let fixture: ComponentFixture<FeriaManizalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeriaManizalesComponent]
    });
    fixture = TestBed.createComponent(FeriaManizalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
