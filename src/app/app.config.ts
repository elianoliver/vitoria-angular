import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { 
  ShoppingCart, 
  Menu, 
  X, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Download, 
  Check, 
  CreditCard, 
  HelpCircle, 
  ChevronDown, 
  Mail, 
  Star, 
  Quote 
} from 'lucide-angular';
import { LucideAngularModule } from 'lucide-angular';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    ...LucideAngularModule.pick({
      ShoppingCart,
      Menu,
      X,
      ArrowRight,
      ShieldCheck,
      Zap,
      Download,
      Check,
      CreditCard,
      HelpCircle,
      ChevronDown,
      Mail,
      Star,
      Quote
    }).providers || []
  ]
};
