/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { McServerStatusService } from './mc-server-status.service';

describe('Service: McServerStatus', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [McServerStatusService]
    });
  });

  it('should ...', inject([McServerStatusService], (service: McServerStatusService) => {
    expect(service).toBeTruthy();
  }));
});
