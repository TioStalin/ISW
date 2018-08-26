import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesMaterialComponent } from './solicitudes-material.component';

describe('SolicitudesMaterialComponent', () => {
  let component: SolicitudesMaterialComponent;
  let fixture: ComponentFixture<SolicitudesMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudesMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudesMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
