import {Action, createReducer, on} from '@ngrx/store';

import {
  createAtmAction,
  createAtmFailureAction,
  createAtmSuccessAction
} from 'src/app/modules/createAtm/store/actions/createAtm.action';
import {CreateAtmStateInterface} from 'src/app/modules/createAtm/store/types/createAtmState.interface';


const initialState: CreateAtmStateInterface = {
  isSubmitting: false,
  validationErrors: null
};

const createAtmReducer = createReducer(
  initialState,
  on(
    createAtmAction,
    (state): CreateAtmStateInterface => ({
      ...state,
      isSubmitting: true,
      validationErrors: null
    })
  ),
  on(
    createAtmSuccessAction,
    (state): CreateAtmStateInterface => ({
      ...state,
      isSubmitting: false
    })
  ),
  on(
    createAtmFailureAction,
    (state, action): CreateAtmStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    })
  )
);

export function reducers(state: CreateAtmStateInterface, action: Action) {
  return createAtmReducer(state, action);
}
