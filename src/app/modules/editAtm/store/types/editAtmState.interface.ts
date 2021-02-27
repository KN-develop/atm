import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface';
import {AtmInterface} from 'src/app/shared/types/atm.interface';

export interface EditAtmStateInterface {
  isLoading: boolean;
  atm: AtmInterface | null;
  isSubmitting: boolean;
  validationErrors: BackendErrorsInterface | null;
}
