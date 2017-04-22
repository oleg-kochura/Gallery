import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { GalleryImage } from '../shared/image';
import { GalleryService } from '../services/gallery.service';
import {Observable} from "rxjs";

@Component({
  selector: 'pictures-list',
  templateUrl: './pictures-list.component.html',
  styleUrls: ['./pictures-list.component.css'],
})

export class PicturesListComponent implements OnInit {
  images: Observable<GalleryImage[]>;

  @ViewChild('grid') grid: ElementRef;

  constructor(private galleryService: GalleryService) {
  }

  ngOnInit() {
    let photosPerPage = 4;

    this.galleryService.getPhotos(photosPerPage);
    this.images = this.galleryService.photos;
  }

}
