import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {Store} from '@ngrx/store';

import {AtmService as SharedAtmService} from 'src/app/shared/services/atm.service';
import {
  deleteAtmAction,
  deleteAtmFailureAction,
  deleteAtmSuccessAction,
} from 'src/app/shared/modules/atm/store/actions/deleteAtm.action';

@Injectable()
export class DeleteAtmEffect {
  deleteAtm$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteAtmAction),
      switchMap(({id}) => {
        return this.sharedAtmService.deleteAtm(id).pipe(
          map((result: boolean) => {
            if (result) {
              return deleteAtmSuccessAction({id});
            }
            return deleteAtmFailureAction();
          }),
          catchError((e) => {
            return of(deleteAtmFailureAction());
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
