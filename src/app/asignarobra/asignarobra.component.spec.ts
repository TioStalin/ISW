import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarobraComponent } from './asignarobra.component';

describe('AsignarobraComponent', () => {
  let component: AsignarobraComponent;
  let fixture: ComponentFixture<AsignarobraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignarobraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarobraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
