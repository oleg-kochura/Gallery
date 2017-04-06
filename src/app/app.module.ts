import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { GalleryComponent }  from './gallery.component';
import { GalleryItemComponent }  from './gallery-item/gallery-item.component';
import { PlaceholderComponent }  from './placeholder/placeholder.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    GalleryComponent,
    GalleryItemComponent,
    PlaceholderComponent
  ],
  bootstrap: [GalleryComponent]
})

export class AppModule {}
