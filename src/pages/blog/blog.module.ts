import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BlogRoutes} from './blog.routing';
import {BlogService} from './blog.service';
import {BlogPagePageComponent} from './blog-page/blog-page.page.component';
import {BrowserModule} from '@angular/platform-browser';
import {BlogListPageComponent} from './blog-list/blog-list.page.component';
import {BlogPostSummaryModule} from '../../components/blog-post-summary/blog-post-summary.module';
import {Post20180421Component} from './posts/20180421-introductions/post.component';

const BlogPosts = [Post20180421Component];

@NgModule({
    declarations: [
        BlogListPageComponent,
        BlogPagePageComponent,

        BlogPosts,
    ],
    entryComponents: BlogPosts,
    imports: [
        BrowserModule,
        RouterModule.forChild(BlogRoutes),

        BlogPostSummaryModule,
    ],
    providers: [
        BlogService,
    ]
})
export class BlogModule { }

