import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {LiveExampleService} from './live-example.service';

@Component({
    selector: 'app-live-example',
    styleUrls: ['./live-example.component.scss'],
    templateUrl: './live-example.component.html'
})
export class LiveExampleComponent implements OnInit {
    @Input() caption: string;
    @Input() height = 300;
    @Input() previewDescription = 'Click here to activate example';
    @Input() previewImage: string;
    @Input() src: string;

    public active: boolean;
    public sanitizedPreviewImage: SafeResourceUrl;
    public sanitizedSrc: SafeResourceUrl;
    public previewStyle: any;
    public iframeStyle: any;

    constructor(public liveExampleService: LiveExampleService, public sanitizer: DomSanitizer) { }

    public ngOnInit() {
        this.liveExampleService.onPlaySubject.subscribe((component) => {
            if (component !== this) {
                this.active = false;
            }
        });

        this.sanitizedPreviewImage = this.sanitizer.bypassSecurityTrustResourceUrl(this.previewImage);
        this.sanitizedSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.src);

        this.previewStyle = {'height.px': this.height, 'background-image': `url("${this.previewImage}")`};
        this.iframeStyle = {'height.px': this.height};
    }

    public activate() {
        this.liveExampleService.onPlaySubject.next(this);
        this.active = true;
    }
}
