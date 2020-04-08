/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ScreenshotRepoService } from './screenshot-repo.service';

describe('Service: ScreenshotRepo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScreenshotRepoService]
    });
  });

  it('should ...', inject([ScreenshotRepoService], (service: ScreenshotRepoService) => {
    expect(service).toBeTruthy();
  }));
});
