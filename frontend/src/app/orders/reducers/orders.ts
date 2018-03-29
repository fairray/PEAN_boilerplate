import { createSelector } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Order } from '../models/order';
import { OrderActions, OrderActionTypes } from '../actions/order';

export interface State extends EntityState<Order> {
  selectedOrderId: string | null;
}

export const adapter: EntityAdapter<Order> = createEntityAdapter<Order>();

export const initialState: State = adapter.getInitialState({
  selectedOrderId: null,
});

export function reducer(
  state = initialState,
  action: OrderActions
): State {
  switch (action.type) {

    case OrderActionTypes.Load: {
      return adapter.addAll(action.payload.orders, state);
    }

    default: {
      return state;
    }
  }
}

export const getSelectedOrderId = (state: State) => state.selectedOrderId;

export const {
  // select the array of order ids
  selectIds: selectOrderIds,

  // select the dictionary of order entities
  selectEntities: selectOrderEntities,

  // select the array of orders
  selectAll: selectAllOrders,

  // select the total order count
  selectTotal: selectOrderTotal
} = adapter.getSelectors();