import { Routes } from '@angular/router';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogListComponent } from './blog-list/blog-list.component';

export const routes: Routes = [
    { path: '', component: BlogListComponent },
    { path: 'post/:id', component: BlogDetailComponent },
    { path: 'create', component: BlogCreateComponent }
  ];
