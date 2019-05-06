import 'hammerjs'

import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { environment } from '../environments/environment'
import { AppComponent } from './app.component'
import { CitySearchTpldrivenComponent } from './city-search-tpldriven/city-search-tpldriven.component'
import { CitySearchComponent } from './city-search/city-search.component'
import { CurrentWeatherComponent } from './current-weather/current-weather.component'
import { CurrentWeatherEffects } from './effects/current-weather.effects'
import { MaterialModule } from './material.module'
import { PostalCodeService } from './postal-code/postal-code.service'
import { metaReducers, reducers } from './reducers'
import * as fromSearch from './reducers/search.reducer'
import { WeatherService } from './weather/weather.service'

@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent,
    CitySearchComponent,
    CitySearchTpldrivenComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([CurrentWeatherEffects]),
  ],
  providers: [WeatherService, PostalCodeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
