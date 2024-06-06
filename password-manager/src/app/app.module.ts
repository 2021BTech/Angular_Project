import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { NavbarComponent } from './navbar/navbar.component';
import { PasswordListComponent } from './password-list/password-list.component';
import { SiteListComponent } from './site-list/site-list.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PasswordListComponent,
    SiteListComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    provideFirebaseApp(() => initializeApp({"projectId":"password-manager-6685c","appId":"1:460735893010:web:86f6236eac6d007c03d2cb","storageBucket":"password-manager-6685c.appspot.com","apiKey":"AIzaSyC4hV4iUNjqwuGLCXGKr-CSmuJ7Cp4njMA","authDomain":"password-manager-6685c.firebaseapp.com","messagingSenderId":"460735893010"})),
          provideAuth(() => getAuth()),
          provideFirestore(() => getFirestore())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
