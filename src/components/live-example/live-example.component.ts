import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
    selector: 'app-live-example',
    styleUrls: ['./live-example.component.scss'],
    templateUrl: './live-example.component.html'
})
export class LiveExampleComponent implements OnInit {
    constructor(public sanitizer: DomSanitizer) { }

    @Input() caption: string;
    @Input() height: number = 300;
    @Input() src: string;
    public sanitizedUrl: SafeResourceUrl;

    public ngOnInit() {
        this.sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.src);
    }
}
