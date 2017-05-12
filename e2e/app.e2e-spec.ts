import { FrontEndShopPage } from './app.po';

describe('front-end-shop App', () => {
  let page: FrontEndShopPage;

  beforeEach(() => {
    page = new FrontEndShopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
