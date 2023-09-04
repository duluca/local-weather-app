import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { importProvidersFrom } from '@angular/core'
import { AppComponent } from './app/app.component'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatButtonModule } from '@angular/material/button'
import { FormsModule } from '@angular/forms'
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http'
import { provideAnimations } from '@angular/platform-browser/animations'
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser'
import { WeatherService } from './app/weather.service'

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      FormsModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule
    ),
    WeatherService,
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
  ],
}).catch((err) => console.error(err))
