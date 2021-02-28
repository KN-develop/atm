import {AtmTableStateInterface} from 'src/app/shared/modules/atmTable/types/atmTableState.interface';
import {AtmStateInterface} from 'src/app/modules/atm/types/atmState.interface';

export interface AppStateInterface {
  atmTable: AtmTableStateInterface;
  atm: AtmStateInterface;
}
