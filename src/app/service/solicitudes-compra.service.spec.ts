import { TestBed, inject } from '@angular/core/testing';

import { SolicitudesCompraService } from './solicitudes-compra.service';

describe('SolicitudesCompraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SolicitudesCompraService]
    });
  });

  it('should be created', inject([SolicitudesCompraService], (service: SolicitudesCompraService) => {
    expect(service).toBeTruthy();
  }));
});
