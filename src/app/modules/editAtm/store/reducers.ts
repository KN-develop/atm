import {Action, createReducer, on} from '@ngrx/store';
import {EditAtmStateInterface} from 'src/app/modules/editAtm/store/types/editAtmState.interface';
import { updateAtmAction, updateAtmFailureAction, updateAtmSuccessAction } from 'src/app/modules/editAtm/store/actions/updateAtm.action';
import { getAtmAction, getAtmFailureAction, getAtmSuccessAction } from 'src/app/modules/editAtm/store/actions/getAtm.action';

const initialState: EditAtmStateInterface = {
  isSubmitting: false,
  validationErrors: null,
  isLoading: false,
  atm: null
};

const editAtmReducer = createReducer(
  initialState,
  on(
    updateAtmAction,
    (state): EditAtmStateInterface => ({
      ...state,
      isSubmitting: true,
      validationErrors: null
    })
  ),
  on(
    updateAtmSuccessAction,
    (state, action): EditAtmStateInterface => ({
      ...state,
      isSubmitting: false,
      atm: action.atm
    })
  ),
  on(
    updateAtmFailureAction,
    (state, action): EditAtmStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    })
  ),
  on(
    getAtmAction,
    (state): EditAtmStateInterface => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    getAtmSuccessAction,
    (state, action): EditAtmStateInterface => ({
      ...state,
      isLoading: false,
      atm: action.atm
    })
  ),
  on(
    getAtmFailureAction,
    (state): EditAtmStateInterface => ({
      ...state,
      isLoading: false
    })
  ),
);

export function reducers(state: EditAtmStateInterface, action: Action) {
  return editAtmReducer(state, action);
}
