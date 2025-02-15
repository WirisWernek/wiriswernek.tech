import { Routes } from '@angular/router';

export const VIEWS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  },
];
