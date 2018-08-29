import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarcompraComponent } from './solicitarcompra.component';

describe('SolicitarcompraComponent', () => {
  let component: SolicitarcompraComponent;
  let fixture: ComponentFixture<SolicitarcompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitarcompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitarcompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
