import {Component, Input, ViewEncapsulation} from '@angular/core';
import {PostData} from '../posts.page.service';

@Component({
  selector: 'app-post',
  styleUrls: ['post.component.scss'],
  styles: ['.post img { margin-bottom: 10px; width: 100% } .post blockquote, .post p { margin: 0 }'],
  templateUrl: 'post.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class PostComponent {
  @Input() post: PostData = {
    content: '',
    date: '',
    links: []
  };
}

