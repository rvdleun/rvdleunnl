import {NgModule} from '@angular/core';
import {CodeExampleComponent} from './code-example.component';
import {CaptionModule} from '../caption/caption.module';
import {CommonModule} from '@angular/common';

@NgModule({
    declarations: [CodeExampleComponent],
    exports: [CodeExampleComponent],
    imports: [CommonModule, CaptionModule],
})
export class CodeExampleModule {
}