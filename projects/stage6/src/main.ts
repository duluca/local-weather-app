import { enableProdMode, importProvidersFrom } from '@angular/core'

import { environment } from './environments/environment'
import { AppComponent } from './app/app.component'
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
      ReactiveFormsModule
    ),
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimations(),
  ],
}).catch((err) => console.error(err))
