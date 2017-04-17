import {Component, OnInit, ViewChild, ElementRef, AfterViewChecked} from '@angular/core';
import { GalleryImage } from '../shared/image';
import { GalleryService } from '../services/gallery.service';
import {Observable} from "rxjs";

declare let Packery: any;

@Component({
  selector: 'pictures-list',
  templateUrl: './pictures-list.component.html',
  styleUrls: ['./pictures-list.component.css'],
})

export class PicturesListComponent implements OnInit, AfterViewChecked {
  images: Observable<GalleryImage[]>;

  @ViewChild('grid') grid: ElementRef;

  constructor(private galleryService: GalleryService) {
  }
  // ngOnInit() {
  //   this.images = this.galleryService.getImages();
  // }


  ngOnInit() {
    // this.galleryService.getRandomImages()
    //   .subscribe(res => this.images = res);

    this.images = this.galleryService.getRandomImages();
  }

  ngAfterViewChecked() {
    this.setGrid();
  }

  setGrid() {
    let pckry = new Packery(this.grid.nativeElement, {
      itemSelector: 'gallery-item',
      gutter: 10
    });
  }

}
