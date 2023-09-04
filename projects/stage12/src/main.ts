import { enableProdMode, importProvidersFrom } from '@angular/core'

import { environment } from './environments/environment'
import { AppComponent } from './app/app.component'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { CurrentWeatherEffects } from './app/effects/current-weather.effects'
import { EffectsModule } from '@ngrx/effects'
import { reducers, metaReducers } from './app/reducers'
import { StoreModule } from '@ngrx/store'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FlexLayoutModule } from '@ngbracket/ngx-layout'
import { provideAnimations } from '@angular/platform-browser/animations'
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http'
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser'

if (environment.production) {
  enableProdMode()
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      FlexLayoutModule,
      FormsModule,
      ReactiveFormsModule,
      StoreModule.forRoot(reducers, {
        metaReducers,
        runtimeChecks: { strictStateImmutability: true, strictActionImmutability: true },
      }),
      EffectsModule.forRoot([CurrentWeatherEffects]),
      StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
    ),
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimations(),
  ],
}).catch((err) => console.error(err))
