import {Component, OnInit} from '@angular/core';
import {BlogPost, BlogService} from '../blog.service';

@Component({
    selector: 'app-blog-list-page',
    styleUrls: ['blog-list.page.component.scss'],
    templateUrl: 'blog-list.page.component.html'
})
export class BlogListPageComponent implements OnInit {
    posts: BlogPost[];

    constructor(private blogService: BlogService) { }

    public ngOnInit() {
        this.posts = this.blogService.getPosts();
    }
}
