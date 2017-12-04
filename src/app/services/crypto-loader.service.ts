import { CryptoCurrencyDetails } from './../../models/CryptoCurrencyDetails';
import { Observable } from 'rxjs/Rx';
import { CryptoCurrency } from './../../models/CryptoCurrency';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalData } from '../../models/GlobalData';


@Injectable()
export class CryptoLoaderService {

  constructor(private http: HttpClient) {

  }

  public getTopTenCurrenciesByMarketCap(): Observable<CryptoCurrency[]> {
    return this.http.get<CryptoCurrency[]>('https://api.coinmarketcap.com/v1/ticker/?limit=10');
  }

  public getCurrencyDetailsById(id: string) {
    return this.http.get<CryptoCurrencyDetails[]>('https://api.coinmarketcap.com/v1/ticker/' + id + '/');
  }

  public loadGlobalData() {
    return this.http.get<GlobalData>('https://api.coinmarketcap.com/v1/global/');
  }
}
