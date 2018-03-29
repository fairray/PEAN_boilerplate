import { Routes } from '@angular/router';
import { AuthGuard } from './auth/services/auth-guard.service';
import { NotFoundPageComponent } from './core/containers/not-found-page';

export const routes: Routes = [
  { path: '', redirectTo: '/orders', pathMatch: 'full' },
  {
    path: 'orders',
    loadChildren: 'app/orders/orders.module#OrdersModule',
    canActivate: [AuthGuard],
  },
  { path: '**', component: NotFoundPageComponent },
];
