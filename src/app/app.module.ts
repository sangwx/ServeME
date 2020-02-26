import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent} from './public/register/register.component';
import { LoginComponent } from './public/login/login.component';
import {ForgetPComponent} from './public/forget-p/forget-p.component';
import {UpdatePComponent} from './public/update-p/update-p.component';
import {Camera} from "@ionic-native/camera/ngx";
import { ImagePicker } from '@ionic-native/image-picker/ngx';


@NgModule({
  declarations: [AppComponent, RegisterComponent, LoginComponent, ForgetPComponent, UpdatePComponent],
  entryComponents: [],
  imports: [BrowserModule, FormsModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // Camera,
    //   ImagePicker
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
