import { NgModule } from '@angular/core'
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button'
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card'
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'

const modules = [MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule]

@NgModule({
  exports: modules,
})
export class MaterialModule {}
