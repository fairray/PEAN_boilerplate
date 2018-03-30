import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromOrders from '../reducers';
import { Order } from '../models/order';

@Component({
  selector: 'app-selected-order-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-order-detail
      [order]="order$ | async">
    </app-order-detail>
  `,
})
export class SelectedOrderPageComponent {
  order$: Observable<Order>;

  constructor(private store: Store<fromOrders.State>) {
    this.order$ = store.pipe(select(fromOrders.getSelectedOrder));
  }
}
