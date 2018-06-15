import {Injectable} from '@angular/core';
import {Post20180501Component} from './posts/20180501-introductions/post.component';
import {Post20180616Component} from './posts/20180616-react360/post.component';

export type BlogCategoryType = 'ar' | 'games' | 'introduction' | 'personal' | 'tools-frameworks' | 'vr' | 'webvr';

export interface BlogCategory {
    description: string;
    type: BlogCategoryType;
}

export interface BlogPost {
    categories: BlogCategoryType[],
    component: any;
    createdOn: string;
    published: boolean;
    summary: string;
    title: string;
    url: string;
}

@Injectable()
export class BlogService {
    public getCategories(): BlogCategory[] {
        return [
            { description: 'AR', type: 'ar' },
            { description: 'Games', type: 'games' },
            { description: 'Introduction', type: 'introduction' },
            { description: 'Personal', type: 'personal' },
            { description: 'Tools and frameworks', type: 'tools-frameworks' },
            { description: 'Virtual Reality', type: 'vr' },
            { description: 'WebVR', type: 'webvr' }
        ];
    }

    public getPosts(): BlogPost[] {
        return [
            {
                categories: ['vr', 'webvr', 'tools-frameworks'],
                component: Post20180616Component,
                createdOn: '2018-06-16',
                published: true,
                summary: 'In which I give my first thoughts about React-360',
                title: 'WebVR Tools: React-360',
                url: 'webvr-tools-react-360',
            },
            {
                categories: ['personal'],
                component: Post20180501Component,
                createdOn: '2018-05-01',
                published: true,
                summary: 'In which I give some background on why I started this blog and some thoughts on becoming a freelancer',
                title: 'Welcome!',
                url: 'test-post',
            },
        ];
    }
}