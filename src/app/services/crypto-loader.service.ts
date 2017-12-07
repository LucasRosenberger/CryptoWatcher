import { CryptoCurrencyDetails } from './../../models/CryptoCurrencyDetails';
import { Observable } from 'rxjs/Rx';
import { CryptoCurrency } from './../../models/CryptoCurrency';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalData } from '../../models/GlobalData';

@Injectable()
export class CryptoLoaderService {
  public actNum: string = '15';
  constructor(private http: HttpClient) {

  }

  public initRequest(): Observable<CryptoCurrency[]> {
    return this.http.get<CryptoCurrency[]>('https://api.coinmarketcap.com/v1/ticker/?limit=');
  }

  public getTopCurrenciesByMarketCap(num?: string) {
    num ? this.actNum = num : null;

    return this.http.get<CryptoCurrency[]>('https://api.coinmarketcap.com/v1/ticker/?limit=' + this.actNum);
  }

  public getCurrencyDetailsById(id: string) {
    return this.http.get<CryptoCurrencyDetails[]>('https://api.coinmarketcap.com/v1/ticker/' + id + '/');
  }

  public loadGlobalData() {
    return this.http.get<GlobalData>('https://api.coinmarketcap.com/v1/global/');
  }
}
