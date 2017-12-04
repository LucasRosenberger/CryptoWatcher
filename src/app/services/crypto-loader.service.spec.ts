import { TestBed, inject } from '@angular/core/testing';

import { CryptoLoaderService } from './crypto-loader.service';

describe('CryptoLoaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CryptoLoaderService]
    });
  });

  it('should be created', inject([CryptoLoaderService], (service: CryptoLoaderService) => {
    expect(service).toBeTruthy();
  }));
});
