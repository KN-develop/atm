import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {filter, map} from 'rxjs/operators';

import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface';
import {AtmInputInterface} from 'src/app/shared/types/atmInput.interface';
import {
  atmSelector,
  isLoadingSelector,
  isSubmittingSelector,
  validationErrorsSelector
} from 'src/app/modules/editAtm/store/selectors';
import {getAtmAction} from 'src/app/modules/editAtm/store/actions/getAtm.action';
import {AtmInterface} from 'src/app/shared/types/atm.interface';
import {updateAtmAction} from 'src/app/modules/editAtm/store/actions/updateAtm.action';

@Component({
  selector: 'at-edit-atm',
  templateUrl: './editAtm.component.html',
})
export class EditAtmComponent implements OnInit {
  initialValues$!: Observable<AtmInputInterface>;
  isSubmitting$!: Observable<boolean>;
  isLoading$!: Observable<boolean>;
  backendErrors$!: Observable<BackendErrorsInterface | null>;
  id: string;

  constructor(private store: Store, private route: ActivatedRoute) {
    this.id = route.snapshot.paramMap.get('id') as string;
  }

  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
  }

  initializeValues(): void {
    // @ts-ignore
    this.isSubmitting$ = this.store.pipe<boolean>(select(isSubmittingSelector));
    // @ts-ignore
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
    // @ts-ignore
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    // @ts-ignore
    this.initialValues$ = this.store.pipe(select(atmSelector), filter(Boolean), map((atm: AtmInterface) => {
      return {
        id: atm.id,
        name: atm.name,
        address: atm.address,
        vendor: atm.vendor,
        model: atm.model,
        status: atm.status
      };
    }));
  }

  fetchData(): void {
    this.store.dispatch(getAtmAction({id: this.id}));
  }

  onSubmit(atmInput: AtmInputInterface): void {
    this.store.dispatch(updateAtmAction({id: this.id, atmInput}));
  }
}

