import { Component } from '@angular/core';
import { GalleryImage } from '../image';

@Component({
  selector: 'gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.css']
})

export class GalleryItemComponent {
  galleryItem: GalleryImage = new GalleryImage('');
}
