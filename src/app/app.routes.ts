import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from "./components/login/login.component";
import { DetailComponent } from "./components/detail/detail.component";
import { NoContentComponent } from './components/no-content/no-content.component';

import { DataResolver } from './app.resolver';

export const ROUTES:Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'detail/:id', component: DetailComponent},
  {path: '**', component: NoContentComponent},
];
