import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// angular-material modules
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdInputModule, MdIconModule} from '@angular/material';

// components
import { AppComponent }  from './app.component';
import { PicturesListComponent }  from './pictures-list/pictures-list.component';
import { GalleryItemComponent }  from './gallery-item/gallery-item.component';
import { PlaceholderComponent }  from './placeholder/placeholder.component';
import { PopupComponent }  from './popup/popup.component';

// services
import { GalleryService } from './services/gallery.service';

import 'hammerjs';


//custom NgModule, to group all material modules into one module
@NgModule({
  imports: [MdButtonModule, MdInputModule, MdIconModule],
  exports: [MdButtonModule, MdInputModule, MdIconModule],
})
export class CustomMaterialModule { }


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    CustomMaterialModule
  ],
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
