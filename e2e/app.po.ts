import { browser, by, element } from 'protractor';

export class LittleChampPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('lc-root h1')).getText();
  }
}
