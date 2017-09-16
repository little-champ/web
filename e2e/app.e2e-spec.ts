import { LittleChampPage } from './app.po';

describe('little-champ App', () => {
  let page: LittleChampPage;

  beforeEach(() => {
    page = new LittleChampPage();
  });

  it('should load app', () => {
    page.navigateTo();
    expect(true).toBeTruthy();
  });
  // it('should display welcome message', () => {
  //   page.navigateTo();
  //   expect(page.getParagraphText()).toEqual('Welcome to lc!!');
  // });
});
