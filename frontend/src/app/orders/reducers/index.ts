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
export const selectOrderState = createFeatureSelector<OrdersState>('orders');


export const getOrderEntitiesState = createSelector(
  selectOrderState,
  state => state.orders
);

export const selectOrderIds = createSelector(selectOrderState, fromOrders.selectOrderIds);

export const selectOrderEntities = createSelector(selectOrderState, fromOrders.selectOrderEntities);
export const selectAllOrders = createSelector(selectOrderState, fromOrders.selectAllUsers);
export const selectOrderTotal = createSelector(selectOrderState, fromOrders.selectUserTotal);
export const selectCurrentOrderId = createSelector(selectOrderState, fromOrders.getSelectedOrderId);

export const selectCurrentOrder = createSelector(
  selectOrderEntities,
  selectCurrentOrderId,
  (userEntities, orderId) => userEntities[orderId]
);
