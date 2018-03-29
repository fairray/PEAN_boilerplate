import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';
import * as fromOrders from './orders';
import * as fromRoot from '../../reducers';

export interface OrdersState {
  orders: fromOrders.State;
}

export interface State extends fromRoot.State {
  orders: OrdersState;
}

export const reducers: ActionReducerMap<OrdersState> = {
  orders: fromOrders.reducer,
};
export const getOrdersState = createFeatureSelector<OrdersState>('orders');


export const getOrderEntitiesState = createSelector(
  getOrdersState,
  state => state.orders
);

export const {
  selectEntities: getOrderEntities,
  selectTotal: getTotalOrders,
} = fromOrders.adapter.getSelectors(getOrderEntitiesState);
