import {Injectable} from '@angular/core';
import {Apartment} from "../models/apartment.model";
import {User} from "../models/user.model";

@Injectable()
export class UserRepository {

  private items:User[] = [
    {
      id: 1,
      username: 'admin',
      password: 'admin'
    },
    {
      id: 2,
      username: 'test1',
      password: 'test1'
    }
  ];

  public create():Promise<User[]> {

    return new Promise((resolve, reject) => {

      // TODO Create method

      resolve(undefined)

    })

  }

  public findByUsernameAndPassword(username:string, password:string):Promise<User> {

    return new Promise((resolve, reject) => {

      let result:User;

      this.items.forEach((item) => {
        if (item.username == username && item.password == password) {
          result = item
        }
      });

      if (!result) {
        reject("Item not found");
      }

      resolve(result);
    })

  }

  public getById(id:number):Promise<User> {

    return new Promise((resolve, reject) => {

      let result:User;

      this.items.forEach((item) => {
        if (item.id == id) {
          result = item
        }
      });

      if (!result) {
        reject("Item not found");
      }

      resolve(result);

    })

  }

  public updateById(id:number, item:User):Promise<User> {

    return new Promise((resolve, reject) => {

      // TODO Update method

      resolve(undefined);

    })

  }


}
