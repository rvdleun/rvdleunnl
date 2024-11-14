import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutPageModule } from '../pages/about/about.page.module';
import {RouterModule} from '@angular/router';
import {MainMenuModule} from '../components/main-menu/main-menu.module';
import {PostsPageModule} from '../pages/posts/posts.page.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,

    AboutPageModule,
    PostsPageModule,

    MainMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
