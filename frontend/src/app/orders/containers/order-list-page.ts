import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import * as fromOrders from '../reducers';
import { Order } from '../models/order';

@Component({
  selector: 'app-orders-list-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-orders-list></app-orders-list>
  `,
})
export class OrderListPageComponent {
  orders$: Observable<Order>;
  constructor(store: Store<fromOrders.State>, route: ActivatedRoute) {
    this.orders$ = store.pipe(select(fromOrders.getSelectedOrder));
  }
}
