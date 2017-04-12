import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../services/gallery.service';
import { GalleryImage } from '../shared/image';

@Component({
  selector: 'popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})

export class PopupComponent implements  OnInit {
  opened: boolean;
  data: GalleryImage;

  constructor(private galleryService: GalleryService) {
  }

  ngOnInit() {
    this.galleryService.test.subscribe((obj) => {
      this.opened = obj.opened;
      this.data = obj.data;
      console.log(this.data);
    })
  }

  open() {

  }

  close() {
    this.opened = false;
  }

}
