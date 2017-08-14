import { BappaPage } from './app.po';

describe('bappa App', () => {
  let page: BappaPage;

  beforeEach(() => {
    page = new BappaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
