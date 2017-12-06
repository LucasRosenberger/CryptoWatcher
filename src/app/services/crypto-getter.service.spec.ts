import { TestBed, inject } from '@angular/core/testing';

import { CryptoGetterService } from './crypto-getter.service';

describe('CryptoGetterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CryptoGetterService]
    });
  });

  it('should be created', inject([CryptoGetterService], (service: CryptoGetterService) => {
    expect(service).toBeTruthy();
  }));
});
