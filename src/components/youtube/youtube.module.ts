import {YouTubeComponent} from './youtube.component';
import {NgModule} from '@angular/core';
import {CaptionModule} from '../caption/caption.module';
import {CommonModule} from '@angular/common';

@NgModule({
    declarations: [YouTubeComponent],
    exports: [YouTubeComponent],
    imports: [CaptionModule, CommonModule],
})
export class YouTubeModule { }
