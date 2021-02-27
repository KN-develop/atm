import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppStateInterface} from 'src/app/shared/types/appState.interface';
import {CreateAtmStateInterface} from 'src/app/modules/createAtm/store/types/createAtmState.interface';

export const createAtmFeatureSelector = createFeatureSelector<AppStateInterface,
  CreateAtmStateInterface>('createAtm');

export const isSubmittingSelector = createSelector(
  createAtmFeatureSelector,
  (createArticleState: CreateAtmStateInterface) => createArticleState.isSubmitting
);

export const validationErrorsSelector = createSelector(
  createAtmFeatureSelector,
  (createArticleState: CreateAtmStateInterface) => createArticleState.validationErrors
);
