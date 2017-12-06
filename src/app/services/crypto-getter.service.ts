import { CryptoCurrency } from './../../models/CryptoCurrency';

import { Injectable } from '@angular/core';
import { CryptoLoaderService } from './crypto-loader.service';

@Injectable()
export class CryptoGetterService {

  private cryptos: CryptoCurrency[];
  private loaded: boolean = false;
  constructor(private cryptoLoader: CryptoLoaderService) {
    this.cryptos = new Array();
    this.cryptoLoader.initRequest().subscribe((data) => { this.cryptos = data; this.loaded = true });
    //TODO async shit
  }

  public getWithParam(id: string): Promise<CryptoCurrency[]> {
    return new Promise((resolve, reject) => {
      this.cryptoLoader.getTopCurrenciesByMarketCap(id).subscribe((data) => {
        resolve(data);
      });
    });
  }
  public get Cryptos(): CryptoCurrency[] {
    return this.cryptos;
  }

}
