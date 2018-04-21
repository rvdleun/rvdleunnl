import {NgModule} from '@angular/core';
import {BlogPostSummaryComponent} from './blog-post-summary.component';
import {BlogPostCategoriesModule} from '../blog-post-categories/blog-post-categories.module';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [BlogPostSummaryComponent],
    exports: [BlogPostSummaryComponent],
    imports: [BlogPostCategoriesModule, RouterModule],
})
export class BlogPostSummaryModule { }
