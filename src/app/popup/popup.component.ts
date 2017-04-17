import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../services/gallery.service';
import { GalleryImage } from '../shared/image';
import { Comment } from '../shared/comment';

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
    this.galleryService.missionAnnounced$.subscribe((data) => {
      this.data = data;
      this.open();
    })
  }

  inc(value: string) {
    this.data[value]++
  }

  open() {
    this.opened = true;
  }

  close() {
    this.opened = false;
  }

  addNewComment(newComment: Comment) {
    this.data.comments.push(newComment);
  }

}
