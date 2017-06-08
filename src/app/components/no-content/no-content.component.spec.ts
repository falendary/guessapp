import { ActivatedRoute, Data } from '@angular/router';
import { Component } from '@angular/core';
import { inject, TestBed } from '@angular/core/testing';
import {NoContentComponent} from "./no-content.component";

describe('NoContentComponent', () => {
  /**
   * Provide our implementations or mocks to the dependency injector
   */
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      NoContentComponent
    ]
  }));

  it('should log ngOnInit', inject([NoContentComponent], (comp: NoContentComponent) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    comp.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
