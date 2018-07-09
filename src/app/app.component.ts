import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { RedditPost } from './post/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public redditPosts: RedditPost[] = [];
  public selectedPost: RedditPost = null;
  public showSidebar = false;

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
      created: post.data.created_utc,
      isRead: false
    }));
  }

  readPost (post: RedditPost) {
    this.selectedPost = post;
    this.showSidebar = false;
  }

  dismissAll () {
    this.redditPosts.forEach((post: RedditPost) => {
      post.isDissmised = true;
    });
  }

  toggleSidebar () {
    this.showSidebar = !this.showSidebar;
  }

  closeSidebar () {
    this.showSidebar = false;
  }
}
