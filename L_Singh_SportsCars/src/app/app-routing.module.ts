import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContenDetailComponent } from './conten-detail/conten-detail.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/contents',
  },
  {
    path: 'contents',
    component: ContentListComponent
  },
  {
    path: 'contents/:id',
    component: ContenDetailComponent
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
