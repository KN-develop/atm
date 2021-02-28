import {createAction, props} from '@ngrx/store';

import {ActionTypes} from 'src/app/shared/modules/atmTable/store/actionTypes';
import {AtmInterface} from 'src/app/shared/types/atm.interface';
import {AtmInputInterface} from 'src/app/shared/types/atmInput.interface';

export const createAtmAction = createAction(
  ActionTypes.CREATE_ATM,
  props<{atmInput: AtmInputInterface}>()
);

export const createAtmSuccessAction = createAction(
  ActionTypes.CREATE_ATM_SUCCESS,
  props<{atm: AtmInterface}>()
);

export const createAtmFailureAction = createAction(
  ActionTypes.CREATE_ATM_FAILURE
);
