import {createAction, props} from '@ngrx/store';

import {ActionTypes} from 'src/app/shared/modules/atmTable/store/actionTypes';
import {AtmInterface} from 'src/app/shared/types/atm.interface';
import {AtmInputInterface} from 'src/app/shared/types/atmInput.interface';

export const createAtmStatusAction = createAction(
  ActionTypes.CREATE_ATM,
  props<{atmInput: AtmInputInterface}>()
);

export const createAtmStatusSuccessAction = createAction(
  ActionTypes.CREATE_ATM_SUCCESS,
  props<{atm: AtmInterface}>()
);

export const createAtmStatusFailureAction = createAction(
  ActionTypes.CREATE_ATM_FAILURE
);
