import { provideHttpClient } from '@angular/common/http'
import { enableProdMode } from '@angular/core'
import { bootstrapApplication } from '@angular/platform-browser'
import { provideAnimations } from '@angular/platform-browser/animations'
import { provideEffects } from '@ngrx/effects'
import { provideStore } from '@ngrx/store'
import { provideStoreDevtools } from '@ngrx/store-devtools'

import { AppComponent } from './app/app.component'
import { CurrentWeatherEffects } from './app/effects/current-weather.effects'
import { metaReducers, reducers } from './app/reducers'
import { environment } from './environments/environment'

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
    provideStoreDevtools({
      maxAge: 25,
      logOnly: environment.production,
      connectInZone: true,
    }),
  ],
}).catch((err) => console.error(err))
