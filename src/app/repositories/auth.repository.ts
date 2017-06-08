import {Injectable} from '@angular/core';
import {User} from "../models/user.model";
import {UserRepository} from "./user.repository";

@Injectable()
export class AuthRepository {

  userRepository: UserRepository;

  constructor(){

    this.userRepository = new UserRepository();
  }

  public login(username:string, password:string):Promise<User> {

    return new Promise((resolve, reject) => {

      // server side request credentials check, but we use UserService to find user;
      // actually repository not allowed to contain any logic, but its demo

      resolve(this.userRepository.findByUsernameAndPassword(username, password));

    })

  }

  public signup(username:string, email:string, password:string):Promise<User> {

    return new Promise((resolve, reject) => {

      // TODO user sign up method

    })

  }

  public logout():void {

    // server side request "logout", but we just remove localStorage property

    localStorage.removeItem("isLogged");

    return undefined;

  }

}
