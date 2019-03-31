import { NgModule } from '@angular/core'
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatToolbarModule,
} from '@angular/material'

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class MaterialModule {}
