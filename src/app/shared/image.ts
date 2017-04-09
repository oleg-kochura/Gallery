export class GalleryImage {
  src: string;
  constructor(src: string) {
    this.src = `url(${src})`
  }
}
