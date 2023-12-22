import { Component } from '@angular/core'
import { MatCardModule } from '@angular/material/card'
import { MatToolbarModule } from '@angular/material/toolbar'
import { FlexModule } from '@ngbracket/ngx-layout/flex'

import { CitySearchComponent } from './city-search/city-search.component'
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
            <app-current-weather></app-current-weather>
          </mat-card-content>
        </mat-card>
        <div fxFlex></div>
      </div>
    </div>
  `,
  standalone: true,
  imports: [
    FlexModule,
    CitySearchComponent,
    CurrentWeatherComponent,
    MatToolbarModule,
    MatCardModule,
  ],
})
export class AppComponent {}
