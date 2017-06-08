import {Injectable} from '@angular/core';

import {AuthRepository} from "../../repositories/auth.repository";
import {User} from "../../models/user.model";

@Injectable()
export class AuthService {

  constructor(private authRepository:AuthRepository) {

  }

  public login(username:string, password:string):Promise<User> {
    return this.authRepository.login(username, password)
  }

  public isAuth(): boolean {
    return !!localStorage.getItem('isLogged');
  }

  public logout():void {
    return this.authRepository.logout();
  }

}
