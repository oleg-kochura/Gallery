import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../services/gallery.service';

@Component({
  selector: 'popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})

export class PopupComponent implements OnInit  {
  opened: boolean;

  constructor(private galleryService: GalleryService) {
  }

  ngOnInit() {
    // this.opened = this.galleryService.opened();
  }

  open() {
    this.opened = true;
  }

  close() {
    this.opened = false;
  }
}
