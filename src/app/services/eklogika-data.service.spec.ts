import { TestBed } from '@angular/core/testing';

import { EklogikaDataService } from './eklogika-data.service';

describe('EklogikaDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EklogikaDataService = TestBed.get(EklogikaDataService);
    expect(service).toBeTruthy();
  });
});
