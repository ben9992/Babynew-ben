import { BabyfacewebPage } from './app.po';

describe('babyfaceweb App', () => {
  let page: BabyfacewebPage;

  beforeEach(() => {
    page = new BabyfacewebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
