import { LangauageTreeAppPage } from './app.po';

describe('langauage-tree-app App', function() {
  let page: LangauageTreeAppPage;

  beforeEach(() => {
    page = new LangauageTreeAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
