import {PostsPageComponent} from './posts.page.component';
import {importProvidersFrom, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {PostsPageRoutes} from './posts.page.routing';
import {PostComponent} from './post/post.component';
import {provideHttpClient, withFetch} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {PostLinkComponent} from './post-link/post-link.component';


@NgModule({
    declarations: [
      PostsPageComponent,

      PostComponent,
      PostLinkComponent
    ],
    imports: [
      CommonModule,
      RouterModule.forRoot(PostsPageRoutes)
    ],
    providers: [
      provideHttpClient( withFetch() )
    ]
})
export class PostsPageModule { }
