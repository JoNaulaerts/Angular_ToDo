import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ToDoListFormComponent } from './to-do-list-form/to-do-list-form.component';
import { ToDoItemFormComponent } from './to-do-item-form/to-do-item-form.component';
const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'itemlist/form', component: ToDoListFormComponent },
  { path: 'item/form', component: ToDoItemFormComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
