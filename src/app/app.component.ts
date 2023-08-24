import { Component, OnInit, signal, effect } from '@angular/core'
import { ThemeService } from './theme.service'

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary">
      <span>LocalCast Weather</span>
      <div fxFlex></div>
      <mat-icon>brightness_5</mat-icon>
      <mat-slide-toggle
        color="warn"
        [checked]="toggleState()"
        (change)="toggleTheme($event.checked)"></mat-slide-toggle>
      <mat-icon>bedtime</mat-icon>
    </mat-toolbar>
    <div fxLayoutAlign="center">
      <div class="mat-caption vertical-margin">Your city, your forecast, right now!</div>
    </div>
    <div fxLayoutAlign="center">
      <app-city-search></app-city-search>
    </div>
    <div fxLayout="row">
      <div fxFlex></div>
      <mat-card appearance="outlined" fxFlex="300px">
        <mat-card-header>
          <mat-card-title
            ><div class="mat-headline-5">Current Weather</div></mat-card-title
          >
        </mat-card-header>
        <mat-card-content> <app-current-weather></app-current-weather> </mat-card-content>
      </mat-card>
      <div fxFlex></div>
    </div>
  `,
})
export class AppComponent implements OnInit {
  toggleState = signal(false)

  constructor(private themeService: ThemeService) {}
  ngOnInit(): void {
    this.toggleState.set(this.themeService.darkTheme)
  }

  toggleTheme(isChecked: boolean): void {
    this.toggleState.set(isChecked)
    this.themeService.setDarkTheme(this.toggleState())
  }
}
