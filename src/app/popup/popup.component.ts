import { Component } from '@angular/core';

@Component({
  selector: 'popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})


export class PopupComponent {
  opened: boolean = false;

    open() {
      this.opened = true;
    }

    close() {
      this.opened = false;
    }
}
