import { TestBed } from '@angular/core/testing';

import { ProductmanagerService } from './productmanager.service';

describe('ProductmanagerService', () => {
  let service: ProductmanagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductmanagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
