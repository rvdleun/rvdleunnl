import {Component, OnInit} from '@angular/core';
import {PostData, PostsPageService} from './posts.page.service';
import {Observable} from 'rxjs';

@Component({
    providers: [PostsPageService],
    selector: 'app-page-posts',
    styleUrls: ['posts.page.component.scss'],
    templateUrl: 'posts.page.component.html'
})
export class PostsPageComponent implements OnInit {
  posts: Observable<PostData[]> | null = null;

  constructor(private postsPageService: PostsPageService) { }

  public ngOnInit() {
    this.posts = this.postsPageService.getPosts();
  }
}
