import {Injectable} from '@angular/core';

import {ApartmentRepository} from "../../repositories/apartment.repository";
import {Apartment} from "../../models/apartment.model";

@Injectable()
export class ApartmentService {

  constructor(private apartmentRepository:ApartmentRepository) {

  }

  public getList():Promise<Apartment[]> {
    return this.apartmentRepository.getList()
  }

  public getById(id:number):Promise<Apartment> {
    return this.apartmentRepository.getById(id);
  }

}
