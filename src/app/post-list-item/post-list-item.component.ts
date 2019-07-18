import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';// classe représentant les propriétés d'un post (title, content, etc.)

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  // post
  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

  // incrémente de un les loveIts du post
  increaseLoveIts() {
      this.post.loveIts++;
  }

  // décrémente de un les loveIts du post
  decreaseLoveIts() {
      this.post.loveIts--;
  }

}
