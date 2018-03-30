import { Action } from '@ngrx/store';
import { Order } from '../models/order';

export enum OrderActionTypes {
  Load = '[Order] Load',
  Select = '[Order] Select',
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handorder/advanced-types.html#discriminated-unions
 */


export class Load implements Action {
  readonly type = OrderActionTypes.Load;

  constructor(public payload: Order[]) {}
}

export class Select implements Action {
  readonly type = OrderActionTypes.Select;

  constructor(public payload: string|number) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type OrderActionsUnion =
  | Load
  | Select;
