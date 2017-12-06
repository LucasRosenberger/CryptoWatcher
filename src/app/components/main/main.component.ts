import { CryptoGetterService } from './../../services/crypto-getter.service';
import { Router } from '@angular/router';
import { CryptoLoaderService } from './../../services/crypto-loader.service';
import { CryptoCurrency } from './../../../models/CryptoCurrency';
import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [CryptoGetterService]
})
export class MainComponent implements OnInit {
  public CryptoCurrencies: Array<CryptoCurrency>;

  constructor(private cryptoLoader: CryptoLoaderService, private router: Router, private cryptoGetter: CryptoGetterService) {
    this.CryptoCurrencies = new Array();

  }

  ngOnInit() {
    this.CryptoCurrencies = this.cryptoGetter.Cryptos;
    console.log("test");
  }
  loadDetails(id: string): void {
    this.router.navigate(['/details', id])
      .then(console.log)
      .catch(console.error);
  }
  globalData() {
    this.router.navigate(['/global']);
  }

  requestedNumberChanged(e: string) {
    this.cryptoGetter.getWithParam(e.substring(1, e.length))
      .then((val) => this.CryptoCurrencies = val);
  }
}
