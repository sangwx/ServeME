import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Camera } from '@ionic-native/camera/ngx';
import {BaseInterceptor} from './service/Interceptor';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { RegisterComponent} from './public/register/register.component';
import { LoginComponent } from './public/login/login.component';
import {ForgetPComponent} from './public/forget-p/forget-p.component';
import {UpdatePComponent} from './public/update-p/update-p.component';
import { ImagePickerOriginal} from '@ionic-native/image-picker';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import * as firebase from 'firebase';

export function tokenGetter() {
    return localStorage.getItem('jwt');
}

const firebaseConfig = {
    apiKey: 'AIzaSyDvyOrUojV_GLRm8GAlDVMim_tu5CjWqE4',
    authDomain: 'maximal-marking-269120.firebaseapp.com',
    databaseURL: 'https://maximal-marking-269120.firebaseio.com',
    projectId: 'maximal-marking-269120',
    storageBucket: 'maximal-marking-269120.appspot.com',
    messagingSenderId: '99413533040',
    appId: '1:99413533040:web:e0eedde0e634d349ecefb5',
    measurementId: 'G-P998SWDVF3'
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

@NgModule({
  declarations: [AppComponent, RegisterComponent, LoginComponent, ForgetPComponent, UpdatePComponent],
  entryComponents: [],
  imports: [BrowserModule,
      FormsModule,
      IonicModule.forRoot(),
      AppRoutingModule,
      HttpClientModule,
      ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
      {provide: HTTP_INTERCEPTORS, useClass: BaseInterceptor, multi: true},
      Camera

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
