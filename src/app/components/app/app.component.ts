/**
 * Angular 2 decorators and services
 */
import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { AuthService } from "../../services/auth/auth.service";
import { Router, NavigationStart, RouteConfigLoadEnd } from '@angular/router';

import 'rxjs/add/operator/filter';


/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  providers: [AuthService],
  styleUrls: ['./app.component.css'],
  template: require('./app.component.html')
})
export class AppComponent implements OnInit {

  constructor(private router:Router, private authService:AuthService) {

    this.router.events
      .filter((event:RouteConfigLoadEnd) => event instanceof NavigationStart)
      .subscribe((event:NavigationStart) => {

        if (!this.authService.isAuth()) {
          if (event.url !== '/login') {
            this.router.navigateByUrl('/login');
          }
        } else {
          if (event.url == '/login') {
            this.router.navigateByUrl('/');
          }
        }

        console.log('event', event);

      })

  }

  public ngOnInit() {

  }

  public isAuth():boolean {

    return this.authService.isAuth();


  }

  public logout():void {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}
