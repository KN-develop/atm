import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {of} from 'rxjs';

import {AtmInterface} from 'src/app/shared/types/atm.interface';
import {EditAtmService} from 'src/app/modules/editAtm/services/editAtm.service';
import {
  updateAtmAction,
  updateAtmFailureAction,
  updateAtmSuccessAction
} from 'src/app/modules/editAtm/store/actions/updateAtm.action';

@Injectable()
export class UpdateAtmEffect {
  updateAtm$ = createEffect(() => this.actions$.pipe(
    ofType(updateAtmAction),
    switchMap(({id, atmInput}) => {
      return this.editAtmService.updateAtm(id, atmInput).pipe(
        map((atm: AtmInterface) => {
          return updateAtmSuccessAction({atm});
        }),
        catchError((errorResponse: HttpErrorResponse) => {
          return of(updateAtmFailureAction({errors: errorResponse.error.errors}));
        })
      );
    })
  ));

  redirectAfterCreate$ = createEffect(() => this.actions$.pipe(
    ofType(updateAtmSuccessAction),
    tap(({atm}) => {
      this.router.navigate(['/atm', atm.id]);
    })
    ),
    {dispatch: false}
  );

  constructor(
    private actions$: Actions,
    private editAtmService: EditAtmService,
    private router: Router
  ) {
  }
}
