import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { initializeApp } from 'firebase/app';
import { environment } from './environment/environment';

// Initialize Firebase app
const firebaseApp = initializeApp(environment.firebase);

// Bootstrap the Angular application
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
