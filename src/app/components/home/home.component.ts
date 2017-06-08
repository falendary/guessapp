import { Component, OnInit } from '@angular/core';

import { AppState } from '../../app.service.ts';
import { Title } from '../../services/title/title.service';
import { XLargeDirective } from '../../directives/x-large/x-large.directive';
import { ApartmentService } from "../../services/apartment/apartment.service";
import {Apartment} from "../../models/apartment.model";

@Component({
  selector: 'home',
  providers: [ApartmentService],
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  public items:Apartment[];

  public priceLimitMin: number = 0;
  public priceLimitMax: number = 10000000000;

  public priceMin:number;
  public priceMax:number;

  constructor(public apartmentService:ApartmentService) {

    this.priceMin = this.priceLimitMin;
    this.priceMax = this.priceLimitMax;

  }

  public ngOnInit() {

    console.log('Home component');

    this.getItems();

  }

  public sliderUpdate(event):void {
    this.priceMin = event.from;
    this.priceMax = event.to;
  }

  public getItems():void {

    this.apartmentService.getList().then(items => {

      this.items = items;

    })
  }

}
