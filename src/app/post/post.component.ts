import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() public post = {};
  @Output() public emitReadPost = new EventEmitter<any>();;

  constructor () {
  }

  ngOnInit () {
  }

  public readPost(post) {
    post.isRead = true;
    this.emitReadPost.emit(post);
  }

}
