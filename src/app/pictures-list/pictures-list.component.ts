import { Component, OnInit } from '@angular/core';
import { GalleryImage } from '../shared/image';

import { GalleryService } from '../services/gallery.service';

@Component({
  selector: 'pictures-list',
  templateUrl: './pictures-list.component.html',
  styleUrls: ['./pictures-list.component.css'],
})

export class PicturesListComponent implements OnInit {
  images: GalleryImage[];

  constructor(private galleryService: GalleryService) {
    this.images = [];
  }

  ngOnInit() {
    this.images = this.galleryService.getImages();
  }
}
