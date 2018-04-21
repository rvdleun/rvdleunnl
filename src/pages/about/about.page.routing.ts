import {Routes} from '@angular/router';
import {AboutPageComponent} from './about.page.component';

export const AboutPageRoutes: Routes = [
    { path: 'about', component: AboutPageComponent },
    { path: '',
        redirectTo: '/about',
        pathMatch: 'full'
    },
];