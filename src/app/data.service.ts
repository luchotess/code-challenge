import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private redditTopUrl = 'https://www.reddit.com/top.json?limit=50';

  constructor(private http: HttpClient) { }

  public getTopReddit (): Observable<any> {
    return this.http.get(this.redditTopUrl);
  }
}
