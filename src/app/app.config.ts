import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withRouterConfig } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import localeDa from '@angular/common/locales/da';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';

registerLocaleData(localeDa);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withRouterConfig({
        paramsInheritanceStrategy: 'always',
      }),
    ),
    provideAnimations(),
    { provide: LOCALE_ID, useValue: 'da-DK' },
  ],
};
