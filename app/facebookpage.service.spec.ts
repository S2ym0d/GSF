import { TestBed } from '@angular/core/testing';

import { FacebookpageService } from './facebookpage.service';

describe('FacebookpageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FacebookpageService = TestBed.get(FacebookpageService);
    expect(service).toBeTruthy();
  });
});
