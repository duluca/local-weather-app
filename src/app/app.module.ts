import 'hammerjs'

import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component'
import { CitySearchTpldrivenComponent } from './city-search-tpldriven/city-search-tpldriven.component'
import { CitySearchComponent } from './city-search/city-search.component'
import { CurrentWeatherComponent } from './current-weather/current-weather.component'
import { MaterialModule } from './material.module'
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
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent],
})
export class AppModule {}
