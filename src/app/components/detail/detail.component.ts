import { CryptoCurrencyDetails } from '../../../models/CryptoCurrencyDetails';
import { CryptoLoaderService } from './../../services/crypto-loader.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {

  public loaded: boolean = false;
  public cryptoDetails: CryptoCurrencyDetails;
  private sub: any;
  private id: string;

  getImageSource(): string {
    return +this.cryptoDetails.percent_change_1h > 0 ? '/assets/volatility/green.png' : '/assets/volatility/red.png';
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  constructor(private route: ActivatedRoute, private cryptoLoader: CryptoLoaderService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.cryptoLoader.getCurrencyDetailsById(this.id).subscribe((data) => {
        this.cryptoDetails = data.pop();
        this.loaded = true;
      });
    });


  }

}
