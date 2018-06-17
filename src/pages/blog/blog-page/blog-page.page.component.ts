import {Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {BlogPost, BlogService} from '../blog.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-blog-page',
    templateUrl: 'blog-page.page.component.html',
})
export class BlogPagePageComponent implements OnInit {
    public post: BlogPost;

    @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;
    private componentRef: ComponentRef<{}>;

    constructor(
        private blogService: BlogService,
        private componentFactoryResolver: ComponentFactoryResolver,
        private route: ActivatedRoute) { }

    public ngOnInit() {
        this.route.params.subscribe(params => {
            const date = params.date;
            const title = params.title;

            const post = this.blogService.getPosts().find(search => search.createdOn === date && search.url === title);
            if (!post) {
                console.error('Unable to find post');
                return;
            }

            const factory = this.componentFactoryResolver.resolveComponentFactory(post.component);
            this.componentRef = this.container.createComponent(factory);
            this.post = post;
        });
    }
}