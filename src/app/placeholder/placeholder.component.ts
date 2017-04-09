import { Component } from '@angular/core';
import { GalleryService } from '../services/gallery.service';

@Component({
  selector: 'placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css'],
})

export class PlaceholderComponent {

  constructor(private galleryService: GalleryService) { }

  onChange(event: any) {
    let file = event.srcElement.files[0];
    let reader = new FileReader();

    reader.onload = this.handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  handleReaderLoaded(e: any) {
    let reader: string = e.target.result;
    this.galleryService.createImage(reader);
  }

}
