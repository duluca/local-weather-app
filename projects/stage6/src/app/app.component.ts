import { Component } from '@angular/core'
import { MatCardModule } from '@angular/material/card'
import { MatToolbarModule } from '@angular/material/toolbar'
import { FlexModule } from '@ngbracket/ngx-layout/flex'

import { CitySearchComponent } from './city-search/city-search.component'
import { CitySearchTpldrivenComponent } from './city-search-tpldriven/city-search-tpldriven.component'
import { CurrentWeatherComponent } from './current-weather/current-weather.component'

@Component({
  selector: 'app-root',
  template: `
    <div>
      <mat-toolbar color="primary">
        <span data-testid="title">LocalCast Weather</span>
      </mat-toolbar>
      <div fxLayoutAlign="center">
        <div class="mat-caption v-pad">Your city, your forecast, right now!</div>
      </div>
      <div fxLayoutAlign="center">
        <!-- Alternate event-based implementation -->
        <!-- <app-city-search (searchEvent)="doSearch($event)"></app-city-search> -->
        <app-city-search></app-city-search>
      </div>
      <div fxLayout="row">
        <div fxFlex></div>
        <mat-card appearance="outlined" fxFlex="300px">
          <mat-card-header>
            <mat-card-title>
              <div class="mat-headline-5">Current Weather</div>
            </mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <!-- Alternate event-based implementation -->
            <!-- <app-current-weather [current]="currentWeather"></app-current-weather> -->
            <app-current-weather></app-current-weather>
          </mat-card-content>
        </mat-card>
        <div fxFlex></div>
      </div>
    </div>
    <div class="example">
      <div fxLayoutAlign="center" style="margin-top: 64px">
        <div class="mat-h3">Template-driven Form Input</div>
      </div>
      <div fxLayoutAlign="center">
        <app-city-search-tpldriven></app-city-search-tpldriven>
      </div>
    </div>
  `,
  standalone: true,
  imports: [
    FlexModule,
    CitySearchComponent,
    CurrentWeatherComponent,
    CitySearchTpldrivenComponent,
    MatToolbarModule,
    MatCardModule,
  ],
})
export class AppComponent {
  // Alternate event-based implementation
  // currentWeather: ICurrentWeather
  // constructor(private weatherService: WeatherService) {}
  // doSearch(searchValue) {
  //   const userInput = searchValue.split(',').map(s => s.trim())
  //   this.weatherService
  //     .getCurrentWeather(userInput[0], userInput.length > 1 ? userInput[1] : undefined)
  //     .pipe(first())
  //     .subscribe(data => (this.currentWeather = data))
  // }
}
