import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'login',
  styles: [``],
  providers: [AuthService],
  template: require('./login.component.html')
})
export class LoginComponent implements OnInit {

  public username:string;
  public password:string;
  public error:boolean = false;

  constructor(private router:Router, private authService:AuthService) {
  }

  public ngOnInit() {

  }

  public login():Promise<boolean> {

    return new Promise((resolve, reject) => {

      this.authService.login(this.username, this.password).then((res)=> {

        console.log('res', res);

        localStorage.setItem('isLogged', 'true');

        resolve(this.error);

        this.router.navigate([''])

      }).catch((res)=> {

        this.error = true;

        resolve(this.error);

      })
    })

  }

  public checkButton():boolean {
    return !!this.username && !!this.password;
  }


}
