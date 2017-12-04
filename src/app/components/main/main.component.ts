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

  constructor(private cryptoLoader: CryptoLoaderService, private router: Router) {
    this.CryptoCurrencies = new Array();
    this.cryptoLoader.getTopTenCurrenciesByMarketCap().subscribe((data) => {
      this.CryptoCurrencies = data;
    });
  }

  loadDetails(id: string): void {
    this.router.navigate(['/details', id])
      .then(console.log)
      .catch(console.error);
  }
  ngOnInit() {
  }

}
