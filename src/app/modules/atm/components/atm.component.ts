import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {getAtmAction} from 'src/app/shared/modules/atm/store/actions/getAtm.action';
import {ActivatedRoute, Router} from '@angular/router';
import {AtmInterface} from 'src/app/shared/types/atm.interface';
import {Observable, Subscription} from 'rxjs';
import {atmSelector, errorSelector, isLoadingSelector} from 'src/app/modules/atm/store/selectors';
import {deleteAtmAction} from 'src/app/shared/modules/atm/store/actions/deleteAtm.action';

@Component({
  selector: 'at-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.scss']
})
export class AtmComponent implements OnInit, OnDestroy {
  id!: string;
  atm!: AtmInterface | null;
  atmSubscription!: Subscription;
  isLoading$!: Observable<boolean>;
  error$!: Observable<string | null>;

  constructor(private store: Store, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
    this.fetchData();
  }

  ngOnDestroy(): void {
    this.atmSubscription.unsubscribe();
  }

  initializeValues(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    // @ts-ignore
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    // @ts-ignore
    this.error$ = this.store.pipe(select(errorSelector));
  }

  initializeListeners(): void {
    this.atmSubscription = this.store
      // @ts-ignore
      .pipe(select(atmSelector))
      .subscribe((atm: AtmInterface | null) => {
        this.atm = atm;
      });
  }

  fetchData(): void {
    this.store.dispatch(getAtmAction({id: this.id}));
  }

  deleteAtm(): void {
    this.store.dispatch(deleteAtmAction({id: this.id}));
    this.router.navigate(['/']);
  }
}
