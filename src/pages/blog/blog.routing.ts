import {Routes} from '@angular/router';
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
