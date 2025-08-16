import { Routes } from '@angular/router';
import { canActivateAuth } from './guards/auth-guard';
import { canActivateLoginRedirect } from './guards/login-guard';

export const routes: Routes = [
  // ✅ When hitting localhost:4200 → redirect to login
  { path: '', pathMatch: 'full', redirectTo: 'login' },

  // 🔑 Login page (guard prevents access if already logged in)
  {
    path: 'login',
    canActivate: [canActivateLoginRedirect],
    loadComponent: () =>
      import('./pages/login/login').then(m => m.Login)
  },

  // 📊 Dashboard (only for logged-in users)
  {
    path: 'dashboard',
    canActivate: [canActivateAuth],
    loadComponent: () =>
      import('./pages/dashboard/dashboard').then(m => m.Dashboard)
  },

  // 📝 Modal form (protected)
  {
    path: 'modal-form',
    canActivate: [canActivateAuth],
    loadComponent: () =>
      import('./pages/modalform/modalform').then(m => m.Modalform)
  },

  // 🏦 Insurance form (protected)
  {
    path: 'insurance',
    canActivate: [canActivateAuth],
    loadComponent: () =>
      import('./pages/insurance/insurance').then(m => m.Insurance)
  },

  // ❌ Catch-all → go to login
  { path: '**', redirectTo: 'login' }
];
