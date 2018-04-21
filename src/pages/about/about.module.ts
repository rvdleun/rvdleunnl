import {AboutComponent} from './about.component';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AboutRoutes} from './about.routing';


@NgModule({
    declarations: [AboutComponent],
    imports: [RouterModule.forRoot(AboutRoutes)]
})
export class AboutModule { }