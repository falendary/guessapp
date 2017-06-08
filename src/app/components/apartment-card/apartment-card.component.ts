import { Component, Input } from '@angular/core';
import {Apartment} from "../../models/apartment.model";

@Component({
  selector: 'apartment-card',
  template: require('./apartment-card.component.html')
})

export class ApartmentCardComponent {

  @Input() item:Apartment;


}
