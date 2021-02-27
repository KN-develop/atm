import {AtmInterface} from 'src/app/shared/types/atm.interface';

export interface AtmTableStateInterface {
  isLoading: boolean;
  error: string | null;
  data: AtmInterface[] | null;
}
