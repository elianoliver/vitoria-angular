import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  importProvidersFrom,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import {
  LucideAngularModule,
  ArrowRight,
  Download,
  Zap,
  ShieldCheck,
  ShoppingCart,
  Mail,
  Quote,
  Star,
  HelpCircle,
  ChevronDown,
  Check,
  X,
  CreditCard,
  Target,
  Lightbulb,
  TrendingUp,
  Users,
  BookOpen,
  Infinity as LucideInfinity,
  Menu,
} from 'lucide-angular';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    importProvidersFrom(
      LucideAngularModule.pick({
        ArrowRight,
        Download,
        Zap,
        ShieldCheck,
        ShoppingCart,
        Mail,
        Quote,
        Star,
        HelpCircle,
        ChevronDown,
        Check,
        X,
        CreditCard,
        Target,
        Lightbulb,
        TrendingUp,
        Users,
        BookOpen,
        Infinity: LucideInfinity,
        Menu,
      }),
    ),
  ],
};
