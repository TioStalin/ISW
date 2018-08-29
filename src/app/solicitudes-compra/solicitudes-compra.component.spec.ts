import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesCompraComponent } from './solicitudes-compra.component';

describe('SolicitudesCompraComponent', () => {
  let component: SolicitudesCompraComponent;
  let fixture: ComponentFixture<SolicitudesCompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudesCompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudesCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
