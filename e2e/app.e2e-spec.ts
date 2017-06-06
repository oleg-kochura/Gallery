import { GalleryPage } from './app.po';

describe('gallery App', () => {
  let page: GalleryPage;

  beforeEach(() => {
    page = new GalleryPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
