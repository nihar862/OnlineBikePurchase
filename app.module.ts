import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BikesComponent } from './bikes/bikes.component';
import { ScootersComponent } from './scooters/scooters.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LogoutComponent } from './logout/logout.component';

import {JoinService} from './join.service';
import { from } from 'rxjs';
import { importType } from '@angular/compiler/src/output/output_ast';
import { SettingsComponent } from './settings/settings.component';
import { ProductsComponent } from './products/products.component';
import { ItemsComponent } from './items/items.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BikesComponent,
    ScootersComponent,
    AccessoriesComponent,
    LoginComponent,
    SignupComponent,
    LogoutComponent,
    SettingsComponent,
    ProductsComponent,
    ItemsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
  ],

  providers: [JoinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
