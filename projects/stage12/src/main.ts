import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'
import { enableProdMode, importProvidersFrom } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser'
import { provideAnimations } from '@angular/platform-browser/animations'
import { FlexLayoutModule } from '@ngbracket/ngx-layout'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { AppComponent } from './app/app.component'
import { CurrentWeatherEffects } from './app/effects/current-weather.effects'
import { metaReducers, reducers } from './app/reducers'
import { environment } from './environments/environment'

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
