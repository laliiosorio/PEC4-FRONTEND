import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleItemComponent } from './article-item/article-item.component';
import { ArticleListComponent } from './article-list/article-list.component';

const routes: Routes = [
  {
    path: '',
    component: ArticleListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule],
})
export class AppRoutingModule { }
