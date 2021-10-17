import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
//localhost:4200/users/1
const routes: Routes = [
  {
    path: "users/:id" , component: UsersComponent
  },
  // {
  //   path: "posts/:id", component: PostsComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
