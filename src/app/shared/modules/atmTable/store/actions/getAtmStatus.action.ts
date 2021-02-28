import {createAction, props} from '@ngrx/store';

import {ActionTypes} from 'src/app/shared/modules/atmTable/store/actionTypes';
import {AtmStatusInterface} from 'src/app/shared/modules/atmTable/types/atmStatus.interface';

export const getAtmStatusAction = createAction(
  ActionTypes.GET_ATM_STATUS_LIST,
  props<{idList: string[]}>()
);

export const getAtmStatusSuccessAction = createAction(
  ActionTypes.GET_ATM_STATUS_LIST_SUCCESS,
  props<{statusTable: AtmStatusInterface[]}>()
);

export const getAtmStatusFailureAction = createAction(
  ActionTypes.GET_ATM_STATUS_LIST_FAILURE
);
