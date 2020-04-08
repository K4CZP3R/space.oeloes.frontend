/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StatsRepoService } from './stats-repo.service';

describe('Service: StatsRepo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StatsRepoService]
    });
  });

  it('should ...', inject([StatsRepoService], (service: StatsRepoService) => {
    expect(service).toBeTruthy();
  }));
});
