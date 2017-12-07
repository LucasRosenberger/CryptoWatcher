import { Router } from '@angular/router';
import { CryptoLoaderService } from './../../services/crypto-loader.service';
import { CryptoCurrency } from './../../../models/CryptoCurrency';
import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public CryptoCurrencies: Array<CryptoCurrency>;
  private actNum: string;

  constructor(private cryptoLoader: CryptoLoaderService, private router: Router) {
    this.CryptoCurrencies = new Array();
    this.actNum = this.cryptoLoader.ActNum;
  }

  ngOnInit() {
    this.cryptoLoader
      .getTopCurrenciesByMarketCap(this.actNum)
      .subscribe(d => this.CryptoCurrencies = d)
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
    this.cryptoLoader
      .getTopCurrenciesByMarketCap(e.substr(1, e.length))
      .subscribe((val) => { this.CryptoCurrencies = val })
  }

  isSelected(e: string) {
    return this.actNum === e;
  }
}
