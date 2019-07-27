import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// component
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { NewPostComponent } from './new-post/new-post.component';

const routes: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: 'new-post', component: NewPostComponent },
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: '**', redirectTo: 'posts' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
