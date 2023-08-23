import { Injectable } from '@angular/core'
import { OverlayContainer } from '@angular/cdk/overlay'

const darkClassName = 'dark-theme'

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor(private overlay: OverlayContainer) {
    this.setDarkTheme(this.darkTheme)
  }

  setDarkTheme(isDarkTheme: boolean): boolean {
    this.darkTheme = isDarkTheme
    if (this.darkTheme) {
      document.documentElement.classList.add(darkClassName)
      this.overlay.getContainerElement().classList.add(darkClassName)
    } else {
      document.documentElement.classList.remove(darkClassName)
      this.overlay.getContainerElement().classList.remove(darkClassName)
    }
    return this.darkTheme
  }

  get darkTheme(): boolean {
    return localStorage.getItem(darkClassName)
      ? localStorage.getItem(darkClassName) === 'true'
      : false
  }

  set darkTheme(isDarkTheme: boolean) {
    localStorage.setItem(darkClassName, isDarkTheme.toString())
  }
}
