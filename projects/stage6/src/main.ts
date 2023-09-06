import { provideHttpClient } from '@angular/common/http'
import { enableProdMode } from '@angular/core'
import { bootstrapApplication } from '@angular/platform-browser'
import { provideAnimations } from '@angular/platform-browser/animations'

import { AppComponent } from './app/app.component'
import { environment } from './environments/environment'

if (environment.production) {
  enableProdMode()
}

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(), provideAnimations()],
}).catch((err) => console.error(err))
