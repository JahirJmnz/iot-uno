import { TestBed } from '@angular/core/testing';

import { ToggleSwitch2ApiService } from './toggle-switch2-api.service';

describe('ToggleSwitch2ApiService', () => {
  let service: ToggleSwitch2ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToggleSwitch2ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
