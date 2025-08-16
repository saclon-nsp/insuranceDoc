import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const canActivateAuth: CanActivateFn = () => {
  const router = inject(Router);

  if (typeof window !== 'undefined' && typeof sessionStorage !== 'undefined') {
    const username = sessionStorage.getItem('username');
    const password = sessionStorage.getItem('password');

    if (username === 'ashish' && password === 'ash#2025') {
      return true; // ✅ logged in
    }
  }

  // ❌ Not logged in → redirect to login
  router.navigate(['/login']);
  return false;
};
