import { ActivatedRoute, Data, Router } from '@angular/router';
import { Component } from '@angular/core';
import {fakeAsync,inject,tick,TestBed} from '@angular/core/testing';
import {ApartmentService} from "../../services/apartment/apartment.service";
import {element} from "protractor/built/index";
import { By } from '@angular/platform-browser';
import {LoginComponent} from "./login.component";
import {AuthService} from "../../services/auth/auth.service";


describe('HomeComponent Pipe filter', () => {
  /**
   * Provide our implementations or mocks to the dependency injector
   */

  let service = {
    login: function (username, password) {
      return new Promise((resolve, reject) => {

        if (username == 'admin' && password == 'admin') {
          resolve(true)
        } else {
          reject(false);
        }


      })
    }
  };


  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {
        provide: Router, useValue: {navigate: {}}
      },
      {
        provide: AuthService, useValue: service
      },
      LoginComponent
    ]
  }));

  it('should not enable button (Login inserted)', inject([LoginComponent], (comp:LoginComponent) => {

    comp.username = 'test';

    expect(comp.checkButton()).toEqual(false);

  }));

  it('should login', inject([LoginComponent], (comp:LoginComponent) => {

    comp.username = 'admin';
    comp.password = 'admin';

    comp.login().then(()=> {
      expect(comp.error).toEqual(false);
    })

  }));

});
