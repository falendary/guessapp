import {IEntity} from "./interfaces/IEntity";
export class Apartment implements IEntity {
  id:number;

  name:string;
  description:string;

  country:string;
  price_dollar:number;
  price_ruble:number;
  district:string;
  metro:string;
  type:string;
  levels:number;

  preview_url: string;


}
