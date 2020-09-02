import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BikesComponent } from './bikes/bikes.component';
import { HomeComponent } from './home/home.component';
import { ScootersComponent } from './scooters/scooters.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LogoutComponent } from './logout/logout.component';
import { SettingsComponent } from './settings/settings.component';
import { ProductsComponent } from './products/products.component';
import { ItemsComponent } from './items/items.component';


const routes: Routes = [
  {path:'bikes',component:BikesComponent},
  {
    path: 'home',
    component:HomeComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'scooters',
    component:ScootersComponent,
  },
  {
    path: 'accessories',
    component:AccessoriesComponent,
  },
  {
    path: 'login',
    component:LoginComponent,
  },
  {
    path: 'signup',
    component:SignupComponent,
  },
  {
    path: 'logout',
    component:LogoutComponent,
  },
  {
    path: 'settings',
    component:SettingsComponent,
  },
  {
    path: 'products',
    component:ProductsComponent,
  },
  {
    path: 'it',
    component:ItemsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[BikesComponent,ScootersComponent,AccessoriesComponent,LoginComponent,SignupComponent,LogoutComponent,HomeComponent,SettingsComponent,ProductsComponent,ItemsComponent]

