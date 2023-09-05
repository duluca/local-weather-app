import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'
import { enableProdMode, importProvidersFrom } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser'
import { provideAnimations } from '@angular/platform-browser/animations'
import { FlexLayoutModule } from '@ngbracket/ngx-layout'

import { AppComponent } from './app/app.component'
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
      ReactiveFormsModule
    ),
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimations(),
  ],
}).catch((err) => console.error(err))
