import {AtmTableStateInterface} from 'src/app/shared/modules/atmTable/types/atmTableState.interface';
import {AtmStateInterface} from 'src/app/modules/atm/types/atmState.interface';
import {CreateAtmStateInterface} from 'src/app/modules/createAtm/store/types/createAtmState.interface';
import {EditAtmStateInterface} from 'src/app/modules/editAtm/store/types/editAtmState.interface';

export interface AppStateInterface {
  atmTable: AtmTableStateInterface;
  atm: AtmStateInterface;
  createAtm: CreateAtmStateInterface;
  editAtm: EditAtmStateInterface;
}
