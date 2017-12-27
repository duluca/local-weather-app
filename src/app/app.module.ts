import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { WeatherService } from './weather/weather.service'
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FlexLayoutModule } from '@angular/flex-layout'

import { AppComponent } from './app.component'
import { CurrentWeatherComponent } from './current-weather/current-weather.component'
import { MaterialModule } from './material.module'
import 'hammerjs'
import { CitySearchComponent } from './city-search/city-search.component'
import { CitySearchTpldrivenComponent } from './city-search-tpldriven/city-search-tpldriven.component'

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
