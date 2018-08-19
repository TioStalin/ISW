import { TestBed, inject } from '@angular/core/testing';

import { ObraService } from './obra.service';

describe('ObraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObraService]
    });
  });

  it('should be created', inject([ObraService], (service: ObraService) => {
    expect(service).toBeTruthy();
  }));
});
