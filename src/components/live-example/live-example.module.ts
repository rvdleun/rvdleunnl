import {NgModule} from '@angular/core';
import {LiveExampleComponent} from './live-example.component';
import {CommonModule} from '@angular/common';
import {CaptionModule} from '../caption/caption.module';

@NgModule({
    declarations: [LiveExampleComponent],
    exports: [LiveExampleComponent],
    imports: [CaptionModule, CommonModule],
})
export class LiveExampleModule {
}