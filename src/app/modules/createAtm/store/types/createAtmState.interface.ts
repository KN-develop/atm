import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface';

export interface CreateAtmStateInterface {
  isSubmitting: boolean;
  validationErrors: BackendErrorsInterface | null;
}
