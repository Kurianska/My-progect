import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { MaterialModule } from './material.module';
import { CabinetComponent } from './cabinet/cabinet.component';





@NgModule({
  declarations: [
    AppComponent,
    CabinetComponent
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatInputModule,
    MatButtonModule,
   MaterialModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
