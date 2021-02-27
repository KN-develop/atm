import {createFeatureSelector, createSelector} from '@ngrx/store';

import {AppStateInterface} from 'src/app/shared/types/appState.interface';
import {EditAtmStateInterface} from 'src/app/modules/editAtm/store/types/editAtmState.interface';

export const editAtmFeatureSelector = createFeatureSelector<AppStateInterface,
  EditAtmStateInterface>('editAtm');

export const isSubmittingSelector = createSelector(
  editAtmFeatureSelector,
  (editAtmState: EditAtmStateInterface): boolean => editAtmState.isSubmitting
);

export const isLoadingSelector = createSelector(
  editAtmFeatureSelector,
  (editAtmState: EditAtmStateInterface) => editAtmState.isLoading
);

export const validationErrorsSelector = createSelector(
  editAtmFeatureSelector,
  (editAtmState: EditAtmStateInterface) => editAtmState.validationErrors
);


export const atmSelector = createSelector(
  editAtmFeatureSelector,
  (editAtmState: EditAtmStateInterface) => editAtmState.atm
);
