import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {of} from 'rxjs';
import {Router} from '@angular/router';

import {AtmService} from 'src/app/modules/atm/services/atm.service';
import {
  deleteAtmAction,
  deleteAtmFailureAction,
  deleteAtmSuccessAction
} from 'src/app/modules/atm/store/actions/deleteAtm.action';

@Injectable()
export class DeleteAtmEffect {
  deleteAtm$ = createEffect(() => this.actions$.pipe(
    ofType(deleteAtmAction),
    switchMap(({id}) => {
      return this.atmService.deleteAtm(id).pipe(
        map(() => {
          return deleteAtmSuccessAction();
        }),
        catchError((e) => {
          return of(deleteAtmFailureAction());
        })
      );
    })
  ));

  redirectAfterDelete$ = createEffect(
    () => this.actions$.pipe(
      ofType(deleteAtmSuccessAction),
      tap(() => {
        this.router.navigate(['/']);
      })
    ),
    {dispatch: false}
  );

  constructor(
    private actions$: Actions,
    private atmService: AtmService,
    private router: Router
  ) {
  }
}
