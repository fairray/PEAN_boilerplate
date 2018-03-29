import { Component, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { map } from 'rxjs/operators';

import * as fromOrders from '../reducers';
import * as order from '../actions/order';

@Component({
  selector: 'bc-view-order-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <bc-selected-order-page></bc-selected-order-page>
  `,
})
export class OrderPageComponent implements OnDestroy {
  actionsSubscription: Subscription;

  constructor(store: Store<fromOrders.State>, route: ActivatedRoute) {
    this.actionsSubscription = route.params
      .pipe(map(params => new order.Load(params.id)))
      .subscribe(store);
  }

  ngOnDestroy() {
    this.actionsSubscription.unsubscribe();
  }
}
