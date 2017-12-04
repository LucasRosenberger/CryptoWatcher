import { CryptoLoaderService } from './../../services/crypto-loader.service';
import { Component, OnInit } from '@angular/core';
import { GlobalData } from '../../../models/GlobalData';
import * as moment from 'moment';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss']
})
export class GlobalComponent implements OnInit {

  public loaded: boolean = false;
  public globalData: GlobalData;
  public time: string;

  constructor(public cryptoLoader: CryptoLoaderService) {
    this.cryptoLoader.loadGlobalData().subscribe((data) => {
      this.globalData = data;
      let now = moment.unix(this.globalData.last_updated);
      this.time = now.format("HH:mm:ss");
      this.loaded = true;
    });
  }

  ngOnInit() {
  }

}
