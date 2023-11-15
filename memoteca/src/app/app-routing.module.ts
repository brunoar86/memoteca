import { CreateThoughtComponent } from './components/thoughts/create-thought/create-thought.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListThoughtsComponent } from './components/thoughts/list-thoughts/list-thoughts.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listThoughts',
    pathMatch: 'full'
  },
  {
    path: 'createThought',
    component: CreateThoughtComponent
  },
  {
    path: 'listThoughts',
    component: ListThoughtsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
