import { OscarAngularPage } from './app.po';

describe('oscar-angular App', () => {
  let page: OscarAngularPage;

  beforeEach(() => {
    page = new OscarAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
