import { Component, Input } from '@angular/core';
import { Comment } from '../models';


@Component({
  selector: 'comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})

export class CommentsListComponent {

  @Input() comments: Comment[];
  @Input() sidenav: any;

}
