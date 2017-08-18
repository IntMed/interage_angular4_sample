import { InterageAppPage } from './app.po';

describe('interage-app App', () => {
  let page: InterageAppPage;

  beforeEach(() => {
    page = new InterageAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
