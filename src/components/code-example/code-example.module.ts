import {NgModule} from '@angular/core';
import {CodeExampleComponent} from './code-example.component';
import {AceEditorModule} from 'ng2-ace-editor';
import {CaptionModule} from '../caption/caption.module';
import {CommonModule} from '@angular/common';

@NgModule({
    declarations: [CodeExampleComponent],
    exports: [CodeExampleComponent],
    imports: [CommonModule, CaptionModule],
})
export class CodeExampleModule {
}