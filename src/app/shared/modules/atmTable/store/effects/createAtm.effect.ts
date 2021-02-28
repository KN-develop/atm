import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {Store} from '@ngrx/store';

import {AtmService as SharedAtmService} from 'src/app/shared/services/atm.service';
import {
  createAtmAction,
  createAtmFailureAction,
  createAtmSuccessAction,
} from 'src/app/shared/modules/atmTable/store/actions/createAtm.action';
import {AtmInterface} from 'src/app/shared/types/atm.interface';
import {getAtmStatusAction} from 'src/app/shared/modules/atmTable/store/actions/getAtmStatus.action';

@Injectable()
export class CreateAtmEffect {
  createAtm$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createAtmAction),
      switchMap(({atmInput}) => {
        return this.sharedAtmService.createAtm(atmInput).pipe(
          map((result: AtmInterface) => {
            this.store.dispatch(getAtmStatusAction({idList: [result.id]}));

            return createAtmSuccessAction({atm: result});
          }),
          catchError((e) => {
            return of(createAtmFailureAction());
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
