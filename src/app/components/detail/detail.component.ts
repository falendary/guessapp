import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Apartment} from "../../models/apartment.model";
import {ApartmentService} from "../../services/apartment/apartment.service";

@Component({
  selector: 'detail',
  styles: [``],
  providers: [ApartmentService],
  template: require('./detail.component.html')
})
export class DetailComponent implements OnInit {

  public id:number;
  public apartment:Apartment;
  public isReady: boolean

  constructor(public route:ActivatedRoute, private apartmentService:ApartmentService) {

    this.id = this.route.snapshot.params['id'];

    this.getItem();

  }

  public getItem():void {

    this.apartmentService.getById(this.id).then(item => {

      this.isReady = true;

      this.apartment = item;
    })

  }

  public ngOnInit() {

  }

  private asyncDataWithWebpack() {

  }

}
