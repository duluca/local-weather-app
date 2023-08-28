import { bootstrapApplication } from '@angular/platform-browser'
import { AppComponent } from './app/app.component'
import { provideHttpClient } from '@angular/common/http'
import { provideAnimations } from '@angular/platform-browser/animations'
import { provideStore } from '@ngrx/store'
import { provideEffects } from '@ngrx/effects'
import { provideStoreDevtools } from '@ngrx/store-devtools'
import { CurrentWeatherEffects } from './app/effects/current-weather.effects'
import { reducers, metaReducers } from './app/reducers'
import { environment } from './environments/environment'
import { enableProdMode } from '@angular/core'

if (environment.production) {
  enableProdMode()
}

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    provideEffects(CurrentWeatherEffects),
    provideStore(reducers, {
      metaReducers,
      runtimeChecks: { strictStateImmutability: true, strictActionImmutability: true },
    }),
    provideStoreDevtools({ maxAge: 25, logOnly: environment.production }),
  ],
}).catch((err) => console.error(err))
