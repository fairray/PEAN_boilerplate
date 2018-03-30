import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';
import { of } from 'rxjs/observable/of';

import { Load, Select, OrderActionTypes } from '../actions/order';
import { Order } from '../models/order';
import {
    map,
    switchMap,
    catchError,
  } from 'rxjs/operators';

@Injectable()
export class OrderEffects {
    constructor(private actions$: Actions) {}
    @Effect()
    load$: Observable<Action> = this.actions$.pipe(
        ofType<Select>(OrderActionTypes.Select),
        switchMap(() => {
            const orders = [{id: 1, title: 'test'}];
            return from(orders).pipe(map(() => new Load(orders)));
        })
    );
}
