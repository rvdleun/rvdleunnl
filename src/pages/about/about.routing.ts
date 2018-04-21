import {Routes} from '@angular/router';
import {AboutComponent} from './about.component';

export const AboutRoutes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: '',
        redirectTo: '/about',
        pathMatch: 'full'
    },
];