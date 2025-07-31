import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // ton fichier de routes
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

export const appConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(BrowserModule)  
  ]
};
