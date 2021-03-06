import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BlogRoutes} from './blog.routing';
import {BlogService} from './blog.service';
import {BlogPagePageComponent} from './blog-page/blog-page.page.component';
import {BrowserModule} from '@angular/platform-browser';
import {BlogListPageComponent} from './blog-list/blog-list.page.component';
import {BlogPostSummaryModule} from '../../components/blog-post-summary/blog-post-summary.module';
import {Post20180501Component} from './posts/20180501-introductions/post.component';
import {BlogPostCategoriesModule} from '../../components/blog-post-categories/blog-post-categories.module';
import {Post20180616Component} from './posts/20180616-react360/post.component';
import {CodeExampleModule} from '../../components/code-example/code-example.module';
import {LiveExampleModule} from '../../components/live-example/live-example.module';
import {Post20180705Component} from './posts/20180705-jedi-challenges-ar-headset/post.component';
import {YouTubeModule} from '../../components/youtube/youtube.module';
import {CaptionModule} from '../../components/caption/caption.module';
import {Post20190731Component} from './posts/20190731-onoffice/post.component';

const BlogPosts = [
    Post20180501Component,
    Post20180616Component,
    Post20180705Component,
    Post20190731Component,
];

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

        BlogPostCategoriesModule,
        BlogPostSummaryModule,
        CaptionModule,
        CodeExampleModule,
        LiveExampleModule,
        YouTubeModule,
    ],
    providers: [
        BlogService,
    ]
})
export class BlogModule { }

