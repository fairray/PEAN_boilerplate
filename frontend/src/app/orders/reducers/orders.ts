import { createSelector } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Order } from '../models/order';
import { OrderActions, OrderActionTypes } from '../actions/order';

export interface State extends EntityState<Order> {
  selectedOrderId: string | null;
}

export const adapter: EntityAdapter<Order> = createEntityAdapter<Order>({
  selectId: (order: Order) => order.id,
  sortComparer: false,
});

export const initialState: State = adapter.getInitialState({
  selectedOrderId: null,
});

export function reducer(
  state = initialState,
  action: OrderActions
): State {
  switch (action.type) {

    case OrderActionTypes.Load: {
      return adapter.addOne(action.payload, {
        ...state,
      });
    }

    default: {
      return state;
    }
  }
}
