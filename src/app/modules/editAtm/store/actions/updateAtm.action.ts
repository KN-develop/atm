import {createAction, props} from '@ngrx/store';

import {AtmInputInterface} from 'src/app/shared/types/atmInput.interface';
import {AtmInterface} from 'src/app/shared/types/atm.interface';
import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface';
import {ActionTypes} from 'src/app/modules/editAtm/store/actionTypes';

export const updateAtmAction = createAction(
  ActionTypes.UPDATE_ATM,
  props<{ id: string, atmInput: AtmInputInterface }>()
);

export const updateAtmSuccessAction = createAction(
  ActionTypes.UPDATE_ATM_SUCCESS,
  props<{ atm: AtmInterface }>()
);

export const updateAtmFailureAction = createAction(
  ActionTypes.UPDATE_ATM_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
);
