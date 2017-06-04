import { Component, OnInit } from '@angular/core';
import { GalleryImage } from '../models';
import { GalleryService } from '../services/gallery.service';
import { ActivatedRoute } from '@angular/router';
// import { Comment, GalleryImage } from '../models';

@Component({
  selector: 'picture-detail',
  templateUrl: './picture-detail.component.html',
  styleUrls: ['./picture-detail.component.css'],
})

export class PictureDetail implements OnInit {
  data: GalleryImage;

  constructor(
    private galleryService: GalleryService,
    private route: ActivatedRoute
  ){}

  ngOnInit(){
    this.route.params.subscribe(params => {
      let id = +params['id'];
      this.data = this.galleryService.getPhotoById(id);
    });
  }

}
