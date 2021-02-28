import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';
import {FormBuilder, FormGroup} from '@angular/forms';

import {getAtmTableAction} from 'src/app/shared/modules/atmTable/store/actions/getAtmTable.action';
import {
  errorSelector,
  atmTableSelector,
  isLoadingSelector,
} from 'src/app/shared/modules/atmTable/store/selectors';
import {AtmInterface} from 'src/app/shared/types/atm.interface';
import {deleteAtmAction} from 'src/app/shared/modules/atm/store/actions/deleteAtm.action';
import {createAtmAction} from 'src/app/shared/modules/atmTable/store/actions/createAtm.action';

@Component({
  selector: 'at-atm-table',
  templateUrl: './atmTable.component.html',
  styleUrls: ['./atmTable.component.scss'],
})
export class AtmTableComponent implements OnInit {
  isLoading$!: Observable<boolean>;
  error$!: Observable<string | null>;
  atmTable!: AtmInterface[] | null;

  tableSubscription?: Subscription;
  form!: FormGroup;

  constructor(private store: Store, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
    this.initializeForm();
  }

  initializeValues(): void {
    // @ts-ignore
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    // @ts-ignore
    this.error$ = this.store.pipe(select(errorSelector));
  }

  initializeListeners(): void {
    this.fetchAtmTable();
    this.tableSubscription = this.store
      // @ts-ignore
      .pipe(select(atmTableSelector))
      .subscribe((atmTable: AtmInterface[] | null) => {
        this.atmTable = atmTable;
      });
  }

  initializeForm(): void {
    this.form = this.fb.group({
      name: '',
      address: '',
      vendor: '',
      model: '',
    });
  }

  fetchAtmTable(): void {
    this.store.dispatch(getAtmTableAction());
  }

  onRemoveAtm(event: MouseEvent, id: string): void {
    event.stopPropagation();
    this.store.dispatch(deleteAtmAction({id}));
  }

  getColorClass(status: string): string {
    const availableClass: {[key: string]: string} = {
      pending: 'table-secondary',
      normal: 'table-success',
      warning: 'table-warning',
      error: 'table-danger',
    };
    return availableClass[status] || '';
  }

  onAddAtm(): void {
    this.store.dispatch(createAtmAction({atmInput: this.form.value}));
    this.initializeForm();
  }
}
