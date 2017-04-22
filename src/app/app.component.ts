import {Component, ViewChild, AfterViewChecked } from '@angular/core';
import { PicturesListComponent }  from './pictures-list/pictures-list.component';

declare let Packery: any;

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewChecked {
  title: string  = 'Welcome to Viseven imagestock';

  @ViewChild(PicturesListComponent) container: PicturesListComponent;

  ngAfterViewChecked() {
    this.setGrid();
  }

  setGrid() {
    let container = this.container.grid.nativeElement;
    let pckry = new Packery(container, {
      itemSelector: 'gallery-item',
      gutter: 10,
      horizontal: true,
      transitionDuration: '0.2s'
    });
  }
}
