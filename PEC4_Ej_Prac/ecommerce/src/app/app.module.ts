import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Import your AppRoutingModule
import { AppComponent } from './app.component';
import { ArticleItemComponent } from './article-item/article-item.component';
import { ArticleListComponent } from './article-list/article-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    ArticleItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Add AppRoutingModule to imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
