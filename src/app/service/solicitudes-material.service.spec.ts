import { TestBed, inject } from '@angular/core/testing';

import { SolicitudesMaterialService } from './solicitudes-material.service';

describe('SolicitudesMaterialService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SolicitudesMaterialService]
    });
  });

  it('should be created', inject([SolicitudesMaterialService], (service: SolicitudesMaterialService) => {
    expect(service).toBeTruthy();
  }));
});
