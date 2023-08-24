import { ApplicationConfig, enableProdMode } from '@angular/core'

import { provideAnimations } from '@angular/platform-browser/animations'
import { provideEffects } from '@ngrx/effects'
import { provideStore } from '@ngrx/store'
import { provideStoreDevtools } from '@ngrx/store-devtools'
import { environment } from 'src/environments/environment'
import { CurrentWeatherEffects } from './effects/current-weather.effects'
import { reducers, metaReducers } from './reducers'
import { provideHttpClient } from '@angular/common/http'

if (environment.production) {
  enableProdMode()
}

export const appConfig: ApplicationConfig = {
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
}
