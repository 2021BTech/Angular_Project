import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideFirebaseApp, getApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from '../environment/environment';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
],
  imports: [
    BrowserModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    FormsModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
