import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-code-example',
    styleUrls: ['./code-example.component.scss'],
    templateUrl: 'code-example.component.html'
})
export class CodeExampleComponent {
    @Input() caption: string;
    @Input() code: string;
}
