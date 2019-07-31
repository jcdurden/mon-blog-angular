import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Post } from '../models/Post.model';// classe représentant les propriétés d'un post (title, content, etc.)
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();

  constructor() { }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  savePosts(){
    firebase.database().ref('/posts').set(this.posts);
  }

  getPosts() {
    firebase.database().ref('/posts')
      .on('value', (data) => {
          this.posts = data.val() ? data.val() : [];
          this.emitPosts();
        }
      );
  }

  createNewPost(post: Post) {
    this.posts.push(post);
    this.savePosts();
    this.emitPosts();
  }

  deletePost(index: number) {
    this.posts.splice(index, 1);
    this.savePosts();
    this.emitPosts();
  }

  increaseLoveIts(index: number) {
    this.posts[index].loveIts++;
    this.savePosts();
    this.emitPosts();
  }

  decreaseLoveIts(index: number) {
    this.posts[index].loveIts--;
    this.savePosts();
    this.emitPosts();
  }
}
