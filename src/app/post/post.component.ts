import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RedditPost } from './post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() public post: RedditPost = new RedditPost();
  @Output() public emitReadPost = new EventEmitter<any>();

  constructor () {
  }

  ngOnInit () {
  }

  public readPost(post: RedditPost) {
    post.isRead = true;
    this.emitReadPost.emit(post);
  }
}
