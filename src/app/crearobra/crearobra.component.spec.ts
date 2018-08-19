import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearobraComponent } from './crearobra.component';

describe('CrearobraComponent', () => {
  let component: CrearobraComponent;
  let fixture: ComponentFixture<CrearobraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearobraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearobraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
