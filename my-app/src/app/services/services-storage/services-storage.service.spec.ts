import { TestBed } from '@angular/core/testing';

import { ServicesStorageService } from './services-storage.service';

describe('ServicesStorageService', () => {
  let service: ServicesStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
