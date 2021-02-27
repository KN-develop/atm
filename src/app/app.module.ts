import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {HttpClientModule} from '@angular/common/http';
import {EffectsModule} from '@ngrx/effects';
import {routerReducer, StoreRouterConnectingModule} from '@ngrx/router-store';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {environment} from 'src/environments/environment';
import {HomeModule} from 'src/app/modules/home/home.module';
import {AtmModule} from 'src/app/modules/atm/atm.module';
import {CreateAtmModule} from 'src/app/modules/createAtm/createAtm.module';
import {EditAtmModule} from 'src/app/modules/editAtm/editAtm.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({router: routerReducer}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    StoreRouterConnectingModule.forRoot(),
    HomeModule,
    EditAtmModule,
    CreateAtmModule,
    AtmModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
