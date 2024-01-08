import { Component, effect, signal } from '@angular/core'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatTooltipModule } from '@angular/material/tooltip'
import { FlexModule } from '@ngbracket/ngx-layout'

import { CitySearchComponent } from './city-search/city-search.component'
import { CurrentWeatherComponent } from './current-weather/current-weather.component'

const darkClassName = 'dark-theme'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CitySearchComponent,
    CurrentWeatherComponent,
    FlexModule,
    MatCardModule,
    MatIconModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  template: `
    <mat-toolbar color="primary">
      <span data-testid="title">LocalCast Weather</span>
      <div fxFlex></div>
      <mat-icon>brightness_5</mat-icon>
      <mat-slide-toggle
        color="warn"
        data-testid="darkmode-toggle"
        [checked]="toggleState()"
        (change)="toggleState.set($event.checked)"></mat-slide-toggle>
      <mat-icon>bedtime</mat-icon>
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
        <mat-card-content> <app-current-weather></app-current-weather> </mat-card-content>
      </mat-card>
      <div fxFlex></div>
    </div>
  `,
})
export class AppComponent {
  readonly toggleState = signal(localStorage.getItem(darkClassName) === 'true')

  constructor() {
    effect(() => {
      localStorage.setItem(darkClassName, this.toggleState().toString())
      document.documentElement.classList.toggle(darkClassName, this.toggleState())
    })
  }
}
