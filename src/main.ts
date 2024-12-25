import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { Pipes28Component } from './app/pipes-28/pipes-28.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
