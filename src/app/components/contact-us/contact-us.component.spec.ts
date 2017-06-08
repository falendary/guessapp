import { ActivatedRoute, Data } from '@angular/router';
import { Component } from '@angular/core';
import {fakeAsync,inject,tick,TestBed} from '@angular/core/testing';
import {ApartmentService} from "../../services/apartment/apartment.service";
import {element} from "protractor/built/index";
import { By } from '@angular/platform-browser';
import {ContactUsComponent} from "./contact-us.component";
import {MetaService} from "../../services/meta/meta.service";


describe('HomeComponent Pipe filter', () => {
  /**
   * Provide our implementations or mocks to the dependency injector
   */

  let service = {
    contactUs: function () {
      return new Promise((resolve, reject) => {
        resolve({});
      })
    }
  };


  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {
        provide: MetaService, useValue: service
      },
      ContactUsComponent
    ]
  }));

  it('should send name and phone', inject([ContactUsComponent], (comp:ContactUsComponent) => {

    comp.name = "Sergey";
    comp.phone = "1312412312";

    comp.contactUs().then(()=> {
      expect(comp.isSent).toEqual(true);
    });

  }));

});
