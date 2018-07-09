import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  redditPosts = [];

  constructor(private _DataService: DataService) {}

  ngOnInit() {
    this.getTopReddit();
  }

  getTopReddit() {
    this._DataService.getTopReddit().subscribe(posts => {
      this.redditPosts = posts;
    });
  }
}
