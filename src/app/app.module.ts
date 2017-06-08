import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule, ApplicationRef } from '@angular/core';
import { removeNgStyles,createNewHosts, createInputTransfer } from '@angularclass/hmr';
import { RouterModule, PreloadAllModules } from '@angular/router';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// App is our top level component

import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './app.service';
import { AppComponent } from './components/app/app.component';
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/detail/detail.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { NoContentComponent } from './components/no-content/no-content.component';

import '../styles/styles.scss';
import '../styles/headings.css';
import {ApartmentRepository} from "./repositories/apartment.repository";
import {UserRepository} from "./repositories/user.repository";
import {AuthRepository} from "./repositories/auth.repository";
import {MetaRepository} from "./repositories/meta.repository";
import {ByPricePipe} from "./pipes/byprice";
import {IonRangeSliderModule} from "ng2-ion-range-slider/index";
import {MaterializeModule} from "ng2-materialize/dist/index";
import {ApartmentCardComponent} from "./components/apartment-card/apartment-card.component";


// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    LoginComponent,
    DetailComponent,
    HomeComponent,
    ContactUsComponent,
    ApartmentCardComponent,
    NoContentComponent,

    ByPricePipe

  ],
  /**
   * Import Angular's modules.
   */
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, {useHash: true, preloadingStrategy: PreloadAllModules}),
    MaterializeModule.forRoot(),

    IonRangeSliderModule
  ],
  /**
   * Expose our Services and Providers into Angular's dependency injection.
   */
  providers: [
    ENV_PROVIDERS,
    APP_PROVIDERS,

    ApartmentRepository,
    UserRepository,
    AuthRepository,
    MetaRepository
  ]
})
export class AppModule {

  constructor(public appRef:ApplicationRef,
              public appState:AppState) {
  }

  public hmrOnInit(store:StoreType) {
    if (!store || !store.state) {
      return;
    }
    console.log('HMR store', JSON.stringify(store, null, 2));
    /**
     * Set state
     */
    this.appState._state = store.state;
    /**
     * Set input values
     */
    if ('restoreInputValues' in store) {
      let restoreInputValues = store.restoreInputValues;
      setTimeout(restoreInputValues);
    }

    this.appRef.tick();
    delete store.state;
    delete store.restoreInputValues;
  }

  public hmrOnDestroy(store:StoreType) {
    const cmpLocation = this.appRef.components.map((cmp) => cmp.location.nativeElement);
    /**
     * Save state
     */
    const state = this.appState._state;
    store.state = state;
    /**
     * Recreate root elements
     */
    store.disposeOldHosts = createNewHosts(cmpLocation);
    /**
     * Save input values
     */
    store.restoreInputValues = createInputTransfer();
    /**
     * Remove styles
     */
    removeNgStyles();
  }

  public hmrAfterDestroy(store:StoreType) {
    /**
     * Display new elements
     */
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }

}
