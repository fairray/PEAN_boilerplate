import { createSelector } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Order } from '../models/order';
import { OrderActionsUnion, OrderActionTypes } from '../actions/order';

export interface State extends EntityState<Order> {
  selectedOrderId: number | string | null;
}

export const adapter: EntityAdapter<Order> = createEntityAdapter<Order>({
  selectId: (order: Order) => order.id,
});

export const initialState: State = adapter.getInitialState({
  selectedOrderId:  null
});

export function reducer(
  state = initialState,
  action: OrderActionsUnion
): State {
  switch (action.type) {

    case OrderActionTypes.Load: {
      return adapter.addMany(action.payload, {
        ...state,
        selectedOrderId: state.selectedOrderId,
      });
    }

    case OrderActionTypes.Select: {
      return {
        ...state,
        selectedOrderId: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}

export const getSelectedId = (state: State) => state.selectedOrderId;
