import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

import {Store} from '@ngrx/store';
import {AtmService as SharedAtmService} from 'src/app/shared/services/atm.service';
import {getAtmAction, getAtmSuccessAction, getAtmFailureAction} from 'src/app/shared/modules/atm/store/actions/getAtm.action';
import {AtmInterface} from 'src/app/shared/types/atm.interface';
import {getAtmStatusAction} from 'src/app/shared/modules/atmTable/store/actions/getAtmStatus.action';

@Injectable()
export class GetAtmEffect {
  getAtm$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAtmAction),
      switchMap(({id}) => {
        return this.sharedAtmService.getAtm(id).pipe(
          map((atm: AtmInterface) => {
            this.store.dispatch(getAtmStatusAction({idList: [atm.id]}));

            return getAtmSuccessAction({atm});
          }),
          catchError((e) => {
            return of(getAtmFailureAction());
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
