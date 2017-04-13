import { ProveItPage } from './app.po';

describe('prove-it App', () => {
  let page: ProveItPage;

  beforeEach(() => {
    page = new ProveItPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
