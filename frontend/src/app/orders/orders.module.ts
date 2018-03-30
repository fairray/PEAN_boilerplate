import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ComponentsModule } from './components';
import { OrderEffects } from './effects/order';
// import { OrderExistsGuard } from './guards/order-exists';

import { OrderListPageComponent } from './containers/order-list-page';
import { ViewOrderPageComponent } from './containers/view-order-page';
import { SelectedOrderPageComponent } from './containers/selected-order-page';
import { MaterialModule } from '../material';

import { reducers } from './reducers';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ComponentsModule,
    RouterModule.forChild([
      {
        path: ':id',
        component: ViewOrderPageComponent,
        // canActivate: [OrderExistsGuard],
      },
      { path: '', component: OrderListPageComponent },
    ]),

    StoreModule.forFeature('orders', reducers),

    EffectsModule.forFeature([OrderEffects]),
  ],
  declarations: [
    ViewOrderPageComponent,
    OrderListPageComponent,
    SelectedOrderPageComponent
  ],
  // providers: [OrderExistsGuard],
})
export class OrdersModule {}
