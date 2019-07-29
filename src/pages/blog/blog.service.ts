import {Injectable} from '@angular/core';
import {Post20180501Component} from './posts/20180501-introductions/post.component';
import {Post20180616Component} from './posts/20180616-react360/post.component';
import {Post20180705Component} from './posts/20180705-jedi-challenges-ar-headset/post.component';
import {Post20190702Component} from './posts/20190702-onoffice/post.component';

export type BlogCategoryType =
    'aframe' |
    'ar' |
    'games' |
    'introduction' |
    'personal' |
    'projects' |
    'tools-frameworks' |
    'vr' |
    'webvr';

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
            { description: 'AFrame', type: 'aframe' },
            { description: 'Augmented Reality', type: 'ar' },
            { description: 'Games', type: 'games' },
            { description: 'Introduction', type: 'introduction' },
            { description: 'Personal', type: 'personal' },
            { description: 'Projects', type: 'projects' },
            { description: 'Tools and frameworks', type: 'tools-frameworks' },
            { description: 'Virtual Reality', type: 'vr' },
            { description: 'WebVR', type: 'webvr' }
        ];
    }

    public getPosts(): BlogPost[] {
        return [
            {
                categories: ['aframe', 'projects', 'vr', 'webvr'],
                component: Post20190702Component,
                createdOn: '2019-07-02',
                published: false,
                summary: 'In which I babble about a pet project that I\'ve been wanting to unleash for a long time.',
                title: 'On/Office',
                url: 'onoffice',
            },
            {
                categories: ['aframe', 'ar'],
                component: Post20180705Component,
                createdOn: '2018-07-05',
                published: true,
                summary: 'In which I divulge dark secrets. And talk about Star Wars.',
                title: 'Jedi Challenges AR Headset',
                url: 'jedi-challenges-ar-headset',
            },
            {
                categories: ['vr', 'webvr', 'tools-frameworks'],
                component: Post20180616Component,
                createdOn: '2018-06-16',
                published: true,
                summary: 'In which I give my first thoughts about React-360.',
                title: 'WebVR Tools: React-360',
                url: 'webvr-tools-react-360',
            },
            {
                categories: ['personal'],
                component: Post20180501Component,
                createdOn: '2018-05-01',
                published: true,
                summary: 'In which I give some background on why I started this blog and some thoughts on becoming a freelancer.',
                title: 'Welcome!',
                url: 'test-post',
            },
        ];
    }
}
