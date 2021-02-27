import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {of} from 'rxjs';

import {CreateAtmService} from 'src/app/modules/createAtm/services/createAtm.service';
import {
  createAtmAction,
  createAtmFailureAction,
  createAtmSuccessAction
} from 'src/app/modules/createAtm/store/actions/createAtm.action';
import {AtmInterface} from 'src/app/shared/types/atm.interface';

@Injectable()
export class CreateAtmEffect {
  createAtm$ = createEffect(() => this.actions$.pipe(
    ofType(createAtmAction),
    switchMap(({atmInput}) => {
      return this.createAtmService.creatAtm(atmInput).pipe(
        map((atm: AtmInterface) => {
          return createAtmSuccessAction({atm});
        }),
        catchError((errorResponse: HttpErrorResponse) => {
          return of(createAtmFailureAction({errors: errorResponse.error.errors}));
        })
      );
    })
  ));

  redirectAfterCreate$ = createEffect(() => this.actions$.pipe(
    ofType(createAtmSuccessAction),
    tap(({atm}) => {
      this.router.navigate(['/atm', atm.id]);
    })
    ),
    {dispatch: false}
  );

  constructor(
    private actions$: Actions,
    private createAtmService: CreateAtmService,
    private router: Router
  ) {
  }
}
