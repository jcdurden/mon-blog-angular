import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Post } from '../models/Post.model';// classe représentant les propriétés d'un post (title, content, etc.)
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts: Post[] = [];
  // liste des posts (tableaux de Post)
/*  posts: Post[] = [
    {
      title: "Mon premier post",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      loveIts: 1,
      created_at: new Date("2019-07-10T13:24:00")
    },
    {
      title: "Mon deuxième post",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      loveIts: -1,
      created_at: new Date("2019-07-16T16:58:00")
    },
    {
      title: "Mon troisième post",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      loveIts: 0,
      created_at: new Date("2019-07-18T09:02:00")
    }
  ];*/
  postsSubject = new Subject<Post[]>();

  constructor() {
    //this.getPosts();
  }

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
