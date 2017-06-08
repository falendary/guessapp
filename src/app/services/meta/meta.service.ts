import {Injectable} from '@angular/core';

import {MetaRepository} from "../../repositories/meta.repository";
import {User} from "../../models/user.model";

@Injectable()
export class MetaService {

  constructor(private meatRepository:MetaRepository) {
  }

  public contactUs(name:string, phone:string):Promise<any> {
    return this.meatRepository.contactUs(name, phone)
  }


}
