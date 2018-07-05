import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
    selector: 'app-youtube',
    styleUrls: ['youtube.component.scss'],
    templateUrl: 'youtube.component.html',
})
export class YouTubeComponent implements OnInit {
    @Input() caption: string;
    @Input() id: string;

    public src: SafeResourceUrl;

    constructor(private sanitizer: DomSanitizer) { }

    public ngOnInit() {
        this.src = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.id}`);
    }
}
