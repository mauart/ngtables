import { SmartTablePage } from './app.po';

describe('smart-table App', () => {
  let page: SmartTablePage;

  beforeEach(() => {
    page = new SmartTablePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
