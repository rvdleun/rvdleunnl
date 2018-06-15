import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-caption',
    styleUrls: ['./caption.component.scss'],
    template: '<p>{{ content }}</p>'
})
export class CaptionComponent {
    @Input() content: string;
}