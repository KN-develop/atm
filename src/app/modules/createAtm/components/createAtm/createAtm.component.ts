import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';

import {isSubmittingSelector, validationErrorsSelector} from 'src/app/modules/createAtm/store/selectors';
import {createAtmAction} from 'src/app/modules/createAtm/store/actions/createAtm.action';
import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface';
import {AtmInputInterface} from 'src/app/shared/types/atmInput.interface';


@Component({
  selector: 'at-create-atm',
  templateUrl: './createAtm.component.html'
})
export class CreateAtmComponent implements OnInit {
  initialValues: AtmInputInterface = {
    name: '',
    address: '',
    vendor: '',
    model: ''
  };
  isSubmitting$!: Observable<boolean>;
  backendErrors$!: Observable<BackendErrorsInterface | null>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    // @ts-ignore
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  onSubmit(atmInput: AtmInputInterface): void {
    this.store.dispatch(createAtmAction({atmInput}));
  }
}

