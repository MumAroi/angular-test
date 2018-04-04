import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';

import { AppRoutingModule } from './/app-routing.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';

// Service
import { AuthService } from './services/auth.service';
// Guard
import { AuthGuard } from './guards/auth.guard';

// Config Firebase
export const firebaseConfig = {
  apiKey: 'AIzaSyCgl0HjVncaVvi0fIRPsBkxGVSXKE_nrCo',
  authDomain: 'ang-authen.firebaseapp.com',
  databaseURL: 'https://ang-authen.firebaseio.com',
  projectId: 'ang-authen',
  storageBucket: 'ang-authen.appspot.com',
  messagingSenderId: '849848760705'
 };

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    ProfileComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [AngularFireDatabase, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
