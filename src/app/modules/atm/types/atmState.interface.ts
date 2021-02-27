import {AtmInterface} from 'src/app/shared/types/atm.interface';

export interface AtmStateInterface {
  isLoading: boolean;
  error: string | null;
  data: AtmInterface | null;
}
