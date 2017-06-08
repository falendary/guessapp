import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MetaService} from "../../services/meta/meta.service";

@Component({
  selector: 'contact-us',
  providers: [MetaService],
  styles: [``],
  template: require('./contact-us.component.html')
})

export class ContactUsComponent implements OnInit {

  public name:string;
  public phone:string;

  public isSent:boolean = false;

  constructor(private metaService:MetaService) {
  }

  public ngOnInit() {
    console.log('hello `About` component');
  }

  public contactUs():Promise<boolean> {

    return new Promise((resolve, reject) => {
      this.metaService.contactUs(this.name, this.phone).then(()=> {
        this.isSent = true;
        resolve(this.isSent)
      })

    })

  }

  public checkButton():boolean {
    return !!this.name && !!this.phone;
  }


}
