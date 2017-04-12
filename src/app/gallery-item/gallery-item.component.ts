import { Component, Input} from '@angular/core';
import { GalleryImage } from '../shared/image';
import { GalleryService } from '../services/gallery.service';

@Component({
  selector: 'gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.css']
})

export class GalleryItemComponent {

  @Input() galleryItem: GalleryImage;

  constructor(private galleryService: GalleryService) {
  }

  openInfo() {
    this.galleryService.openPopup(this.galleryItem);
  }

}
