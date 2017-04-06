import { Component } from '@angular/core';

@Component({
  selector: 'placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css'],
  providers: []
})

export class PlaceholderComponent {
  constructor() {}

  onChange(event) {
    var files = event.srcElement.files;
    console.log(files);
  }

}
