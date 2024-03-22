import { TestBed } from '@angular/core/testing';

import { ToggleSwitch3ApiService } from './toggle-switch3-api.service';

describe('ToggleSwitch3ApiService', () => {
  let service: ToggleSwitch3ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToggleSwitch3ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
