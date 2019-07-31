import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/Post.model';// classe représentant les propriétés d'un post (title, content, etc.)
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  // post
  @Input() post: Post;
  @Input() index: number;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

  // incrémente de un les loveIts du post
  onIncreaseLoveIts(index: number) {
    this.postsService.increaseLoveIts(index);
  }

  // décrémente de un les loveIts du post
  onDecreaseLoveIts(index: number) {
    this.postsService.decreaseLoveIts(index);
  }

  onDelete(index: number) {
    this.postsService.deletePost(index);
  }

}
