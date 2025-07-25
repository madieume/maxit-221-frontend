import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // ton tableau de routes

export const appConfig = {
  providers: [
    provideRouter(routes),
  ]
};
