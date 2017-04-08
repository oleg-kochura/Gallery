import { Component } from '@angular/core';

@Component({
  selector: 'pictures-list',
  templateUrl: 'pictures-list.component.html',
  styleUrls: ['pictures-list.component.css'],
})
export class PicturesListComponent {
  title = 'Welcome to Viseven imagestock';
  pictures: any[] = [];

  constructor() {}

  getImageSrc(src: string) {
  }
}
