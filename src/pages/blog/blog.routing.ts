import {Routes} from '@angular/router';
import {Post20180421TestPostComponent} from './posts/20180421-test-post/20180421-test-post.component';
import {BlogPagePageComponent} from './blog-page/blog-page.page.component';
import {BlogListPageComponent} from './blog-list/blog-list.page.component';

export let BlogRoutes: Routes = [
    {
        component: BlogListPageComponent,
        path: 'blog',
    },
    {
        component: BlogPagePageComponent,
        path: 'blog/:date/:title',
    },
];
