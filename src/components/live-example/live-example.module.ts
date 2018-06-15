import {NgModule} from '@angular/core';
import {LiveExampleComponent} from './live-example.component';
import {CommonModule} from '@angular/common';
import {CaptionModule} from '../caption/caption.module';
import {LiveExampleService} from './live-example.service';

@NgModule({
    declarations: [LiveExampleComponent],
    exports: [LiveExampleComponent],
    imports: [CaptionModule, CommonModule],
    providers: [LiveExampleService]
})
export class LiveExampleModule {
}