/**
 * Angular 2 decorators and services
 */
import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { Router, NavigationStart, RouteConfigLoadEnd } from '@angular/router';

import 'rxjs/add/operator/filter';


/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  providers: [],
  styleUrls: ['./app.component.css'],
  template: require('./app.component.html')
})
export class AppComponent {

  constructor() {

  }


}
