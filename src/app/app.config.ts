import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';

import { provideAppConfig } from './core/config/app-config.token';
import { httpErrorInterceptor } from './core/interceptors/http-error.interceptor';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withHashLocation()),
    provideHttpClient(withInterceptors([httpErrorInterceptor])),
    provideAppConfig()
  ]
};
