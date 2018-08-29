import { TestBed, inject } from '@angular/core/testing';

import { SolicitarcompraService } from './solicitarcompra.service';

describe('SolicitarcompraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SolicitarcompraService]
    });
  });

  it('should be created', inject([SolicitarcompraService], (service: SolicitarcompraService) => {
    expect(service).toBeTruthy();
  }));
});
