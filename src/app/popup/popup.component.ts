import { Component } from '@angular/core';
import { GalleryService } from '../services/gallery.service';

@Component({
  selector: 'popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})

export class PopupComponent {
  opened: boolean;

  constructor(private galleryService: GalleryService) {
  }

  open() {
    this.opened = true;
  }

  close() {
    this.opened = false;
  }

}
