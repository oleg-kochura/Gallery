import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css'],
})

export class PlaceholderComponent {

  @Output()
  onInputFile = new EventEmitter();

  onChange(event: any) {
    let file = event.srcElement.files[0];
    let reader = new FileReader();

    reader.onload = this.handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  handleReaderLoaded(e: any) {
    let reader: string = e.target.result;
    this.onInputFile.emit(reader);
  }

}
