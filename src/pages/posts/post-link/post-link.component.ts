import {Component, Input} from '@angular/core';
import {PostData, PostDataLink} from '../posts.page.service';

@Component({
  selector: 'app-post-link',
  styleUrls: ['post-link.component.scss'],
  templateUrl: 'post-link.component.html'
})
export class PostLinkComponent {
  @Input() link: PostDataLink = {
    href: '',
    vendor: 'memos'
  };
}

