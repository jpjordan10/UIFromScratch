import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BooksComponent } from './books/books.component';
import { SortOptionsComponent } from './sortOptions/sortOptions.component';
import { UsersComponent } from "./users/users.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'books', component: BooksComponent },
  { path: 'sortOptions', component: SortOptionsComponent},
  { path: 'users', component: UsersComponent}
];

export const routing = RouterModule.forRoot(routes);
