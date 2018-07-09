import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { RedditPost } from './post/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  redditPosts: RedditPost[] = [];
  selectedPost: RedditPost = null;

  constructor (private _DataService: DataService) {
  }

  ngOnInit () {
    this.getTopReddit();
  }

  getTopReddit () {
    this._DataService.getTopReddit().subscribe(data => {
      this.redditPosts = this.normalizeResponseData(data);
    });
  }

  normalizeResponseData (data): RedditPost[] {
    return data.data.children.map(post => ({
      author: post.data.author,
      thumbnail: post.data.thumbnail,
      num_comments: post.data.num_comments,
      permalink: post.data.permalink,
      title: post.data.title,
      isRead: false
    }));
  }

  readPost (post: RedditPost) {
    this.selectedPost = post;
  }
}
