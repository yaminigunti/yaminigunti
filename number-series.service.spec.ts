import { TestBed } from '@angular/core/testing';

import { NumberSeriesService } from './number-series.service';

describe('NumbweSeriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NumberSeriesService = TestBed.get(NumberSeriesService);
    expect(service).toBeTruthy();
  });
});
