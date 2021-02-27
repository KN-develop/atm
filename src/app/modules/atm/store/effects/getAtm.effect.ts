import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

import {getAtmAction, getAtmFailureAction, getAtmSuccessAction} from 'src/app/modules/atm/store/actions/getAtm.action';
import {AtmInterface} from 'src/app/shared/types/atm.interface';
import {AtmService as SharedAtmService} from 'src/app/shared/services/atm.service';

@Injectable()
export class GetAtmEffect {
  getAtm$ = createEffect(() => this.actions$.pipe(
    ofType(getAtmAction),
    switchMap(({id}) => {
      return this.sharedAtmService.getAtm(id).pipe(
        map((atm: AtmInterface) => {
          return getAtmSuccessAction({atm});
        }),
        catchError((e) => {
          return of(getAtmFailureAction());
        })
      );
    })
  ));

  constructor(
    private actions$: Actions,
    private sharedAtmService: SharedAtmService
  ) {
  }
}
