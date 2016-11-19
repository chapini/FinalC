import { FinalCPage } from './app.po';

describe('final-c App', function() {
  let page: FinalCPage;

  beforeEach(() => {
    page = new FinalCPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
