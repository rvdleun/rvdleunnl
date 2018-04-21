import {Component, Input, OnInit} from '@angular/core';
import {BlogCategoryType, BlogService} from '../../pages/blog/blog.service';

@Component({
    selector: 'app-blog-post-categories',
    template: '{{ categories }}'
})
export class BlogPostCategoriesComponent implements OnInit {
    @Input() types: BlogCategoryType[];

    public categories: string;

    constructor(private blogService: BlogService) { }

    public ngOnInit() {
        const categories = this.blogService.getCategories();
        this.categories = this.types.map((type) => {
            return categories.find(search => search.type === type).description;
        }).sort().join(', ');
    }
}
