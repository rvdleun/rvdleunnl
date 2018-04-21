import {BlogPost} from '../../pages/blog/blog.service';
import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-blog-post-summary',
    styleUrls: ['blog-post-summary.component.scss'],
    templateUrl: 'blog-post-summary.component.html',
})
export class BlogPostSummaryComponent implements OnInit {
    @Input() blogPost: BlogPost;

    public link: string;

    public ngOnInit() {
        this.link = '/' + ['blog', this.blogPost.createdOn, this.blogPost.url].join('/');
    }
}