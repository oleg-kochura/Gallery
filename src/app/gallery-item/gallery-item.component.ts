import { Component, Input } from '@angular/core';
import { GalleryImage } from '../shared/image';
import { Comment } from '../shared/comment';
import { GalleryService } from '../services/gallery.service';

@Component({
  selector: 'gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.css']
})

export class GalleryItemComponent {
  @Input() galleryItem: GalleryImage;

  private comments: Comment[] = [];
  private likes: number = 0;
  private dislikes: number = 0;

  constructor(private galleryService: GalleryService) {
  }

  openInfo() {
   // this.galleryService.openPopup(this);
  }

}
