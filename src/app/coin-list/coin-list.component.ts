import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.scss']
})
export class CoinListComponent implements OnInit {

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getBannerData();
  }
  getBannerData(){
    this.api.getTrendingCurrency("INR")
    .subscribe(res=>{
      console.log(res);
    })
   }
  getAllData(){

  }
}
