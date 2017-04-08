import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { PicturesListComponent }  from './pictures-list/pictures-list.component';
import { GalleryItemComponent }  from './gallery-item/gallery-item.component';
import { PlaceholderComponent }  from './placeholder/placeholder.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    PicturesListComponent,
    GalleryItemComponent,
    PlaceholderComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
