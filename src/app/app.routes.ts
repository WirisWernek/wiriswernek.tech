import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./views/views.routes').then((r) => r.VIEWS_ROUTES),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  },
];
