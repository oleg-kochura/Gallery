import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { PicturesListComponent }  from './pictures-list/pictures-list.component';
import { GalleryItemComponent }  from './gallery-item/gallery-item.component';
import { PlaceholderComponent }  from './placeholder/placeholder.component';
import { PopupComponent }  from './popup/popup.component';

import { GalleryService } from './services/gallery.service';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    PicturesListComponent,
    GalleryItemComponent,
    PlaceholderComponent,
    PopupComponent
  ],
  providers: [GalleryService],
  bootstrap: [AppComponent]
})

export class AppModule {}
