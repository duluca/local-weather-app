import { browser, by, element } from 'protractor'

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root div h1')).getText() as Promise<string>
  }
}
