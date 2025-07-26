import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { RecipeService } from './recipes/recipes.service';

export const appConfig: ApplicationConfig = {
  providers: [
    RecipeService,
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes)
  ]
};
