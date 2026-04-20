import { ApplicationConfig, provideBrowserGlobalErrorListeners, importProvidersFrom } from '@angular/core';
import { LucideAngularModule, ShoppingCart, Menu, X, Check, Star } from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    importProvidersFrom(
      LucideAngularModule.pick({
        ShoppingCart,
        Menu,
        X,
        Check,
        Star,
      }),
    ),
  ],
};
