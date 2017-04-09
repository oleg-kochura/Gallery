import { Component, Input } from '@angular/core';
import { GalleryImage } from '../shared/image';

@Component({
  selector: 'gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.css']
})

export class GalleryItemComponent {
  @Input() galleryItem: GalleryImage;
}
