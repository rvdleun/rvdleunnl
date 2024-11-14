import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface PostDataLink {
  href: string;
  vendor: 'bluesky' | 'mastadon' | 'memos'
}

export interface PostData {
  content: string;
  date: string;
  links: PostDataLink[]
}

@Injectable()
export class PostsPageService {
  constructor(private http: HttpClient) { }

  public getPosts(): Observable<PostData[]> {
    return this.http.get<PostData[]>('https://rvdleun-feed.app.leunix.nl/');
  }
}
