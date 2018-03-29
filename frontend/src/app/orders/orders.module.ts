import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ComponentsModule } from './components';
// import { OrderEffects } from './effects/order';
// import { OrderExistsGuard } from './guards/order-exists';

import { OrderListPageComponent } from './containers/order-list-page';
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
        component: OrderListPageComponent,
        // canActivate: [OrderExistsGuard],
      },
      { path: '', component: OrderListPageComponent },
    ]),

    StoreModule.forFeature('orders', reducers),

    // EffectsModule.forFeature([OrderEffects]),
  ],
  declarations: [
    OrderListPageComponent
  ],
  // providers: [OrderExistsGuard],
})
export class OrdersModule {}
