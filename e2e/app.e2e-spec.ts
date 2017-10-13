import { BetsoftApplicationFrontPage } from './app.po';

describe('betsoft-application-front App', function() {
  let page: BetsoftApplicationFrontPage;

  beforeEach(() => {
    page = new BetsoftApplicationFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
