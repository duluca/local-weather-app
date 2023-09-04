import { enableProdMode, importProvidersFrom } from '@angular/core'

import { environment } from './environments/environment'
import { AppComponent } from './app/app.component'
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser'

if (environment.production) {
  enableProdMode()
}

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(BrowserModule)],
}).catch((err) => console.error(err))
