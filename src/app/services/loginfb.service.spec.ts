import { TestBed } from '@angular/core/testing';

import { LoginfbService } from './loginfb.service';

describe('LoginfbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginfbService = TestBed.get(LoginfbService);
    expect(service).toBeTruthy();
  });
});
