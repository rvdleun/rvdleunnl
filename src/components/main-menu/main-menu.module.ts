import {NgModule} from '@angular/core';
import {MainMenuComponent} from './main-menu.component';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [MainMenuComponent],
    imports: [RouterModule],
    exports: [MainMenuComponent],
})
export class MainMenuModule { }