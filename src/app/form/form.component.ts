import { Component, Output, EventEmitter } from '@angular/core';
import { Comment } from '../shared/comment';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'comments-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {
  newComment: Comment;

  @Output() onAddNewComment = new EventEmitter();

  addComment(comment: NgForm) {
    this.newComment = new Comment(comment.value.author, new Date(), comment.value.message);
    this.onAddNewComment.emit(this.newComment);
  }
}
