import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {Store} from '@ngrx/store';

import {
  getAtmTableAction,
  getAtmTableFailureAction,
  getAtmTableSuccessAction,
} from 'src/app/shared/modules/atmTable/store/actions/getAtmTable.action';
import {GetAtmTableResponseInterface} from 'src/app/shared/modules/atmTable/types/getAtmTableResponseInterface';
import {getAtmStatusAction} from 'src/app/shared/modules/atmTable/store/actions/getAtmStatus.action';
import {AtmService as SharedAtmService} from 'src/app/shared/services/atm.service';

@Injectable()
export class GetAtmTableEffect {
  getAtmTable$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAtmTableAction),
      switchMap(() => {
        return this.sharedAtmService.getAtmTable().pipe(
          map((atmTableResponse: GetAtmTableResponseInterface) => {
            const atmTable = atmTableResponse.atmTable;
            const idList = atmTable.map((el) => el.id);
            this.store.dispatch(getAtmStatusAction({idList}));

            return getAtmTableSuccessAction({atmTable});
          }),
          catchError((e) => {
            return of(getAtmTableFailureAction());
          })
        );
      })
    )
  );

  constructor(
    private store: Store,
    private actions$: Actions,
    private sharedAtmService: SharedAtmService
  ) {}
}
