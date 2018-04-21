import {AboutPageComponent} from './about.page.component';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AboutPageRoutes} from './about.page.routing';


@NgModule({
    declarations: [AboutPageComponent],
    imports: [RouterModule.forRoot(AboutPageRoutes)]
})
export class AboutPageModule { }
