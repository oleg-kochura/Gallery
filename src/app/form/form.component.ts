import { Component, Output, EventEmitter } from '@angular/core';
import { Comment } from '../shared/comment';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'comments-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {
  newComment: Comment;

  @Output() onAddNewComment = new EventEmitter();

  addComment(comment: NgForm) {
    if ( this.isValid(comment.value) ) {
      this.newComment = new Comment(comment.value.author, new Date(), comment.value.message);
      this.onAddNewComment.emit(this.newComment);
    }
  }

  isValid(obj: NgForm) {
    return Object.keys(obj).every((key) => obj[key]);
  }
}
