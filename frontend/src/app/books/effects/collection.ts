import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { defer } from 'rxjs/observable/defer';
import { of } from 'rxjs/observable/of';
import { Load } from './../actions/book';

import {
  CollectionActions,
  LoadFail,
  LoadSuccess,
  AddBookSuccess,
  AddBookFail,
  CollectionActionTypes,
  RemoveBook,
  RemoveBookFail,
  RemoveBookSuccess,
  AddBook,
} from './../actions/collection';
import { Book } from '../models/book';
import { switchMap, toArray, map, catchError, mergeMap } from 'rxjs/operators';

@Injectable()
export class CollectionEffects {

  @Effect()
  loadCollection$: Observable<Action> = this.actions$.pipe(
    ofType(CollectionActionTypes.Load)
  );

  @Effect()
  addBookToCollection$: Observable<any> = this.actions$.pipe(
    ofType(CollectionActionTypes.AddBook),
    map((action: AddBook) => action.payload)
  );

  @Effect()
  removeBookFromCollection$: Observable<any> = this.actions$.pipe(
    ofType(CollectionActionTypes.RemoveBook),
    map((action: RemoveBook) => action.payload)
  );

  constructor(private actions$: Actions) {}
}
