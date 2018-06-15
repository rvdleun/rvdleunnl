import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {LiveExampleComponent} from './live-example.component';

@Injectable()
export class LiveExampleService {
    public onPlaySubject: Subject<LiveExampleComponent> = new Subject<LiveExampleComponent>();
}
