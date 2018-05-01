import {Injectable} from '@angular/core';
import {Post20180501Component} from './posts/20180501-introductions/post.component';

export type BlogCategoryType = 'ar' | 'games' | 'introduction' | 'personal' | 'vr' | 'webvr';

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
            { description: 'Virtual Reality', type: 'vr' },
            { description: 'WebVR', type: 'webvr' }
        ];
    }

    public getPosts(): BlogPost[] {
        return [
            {
                categories: ['personal'],
                component: Post20180501Component,
                createdOn: '2018-05-01',
                published: true,
                summary: 'In which I give some background on why I started this blog and some thoughts on becoming a freelancer',
                title: 'Welcome!',
                url: 'test-post',
            }
        ];
    }
}