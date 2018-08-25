import { TestBed, inject } from '@angular/core/testing';

import { SolicitarService } from './solicitar.service';

describe('SolicitarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SolicitarService]
    });
  });

  it('should be created', inject([SolicitarService], (service: SolicitarService) => {
    expect(service).toBeTruthy();
  }));
});
