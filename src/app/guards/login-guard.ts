import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { StorageService } from '../services/storage';

export const canActivateLoginRedirect: CanActivateFn = () => {
  const router = inject(Router);
  const storage = inject(StorageService);
  
  storage.removeItem('username');
  storage.removeItem('password');

  // ✅ not logged in → allow to see login page
  return true;
};
