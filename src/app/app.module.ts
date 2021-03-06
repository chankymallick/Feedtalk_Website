import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ArticlereaderComponent } from './articlereader/articlereader.component';
import { HomeComponent } from './home/home.component';
import { EscapeHtmlPipe } from './pipes/keep-html.pipe';
import { LinksreaderComponent } from './linksreader/linksreader.component';
import { SearchfeedsComponent } from './searchfeeds/searchfeeds.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'article/:urlLink', component: ArticlereaderComponent },
  { path: 'newslinks/:urlLink', component: LinksreaderComponent },
  { path: 'search/:query', component: SearchfeedsComponent },
  { path: '', component: HomeComponent }


]

@NgModule({
  declarations: [
    AppComponent, 
    ArticlereaderComponent, 
    HomeComponent,
    EscapeHtmlPipe,
    LinksreaderComponent,
    SearchfeedsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
