import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ArticlereaderComponent } from './articlereader/articlereader.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'news/:urlLink', component: ArticlereaderComponent },
  { path: '', component: HomeComponent }

]

@NgModule({
  declarations: [
    AppComponent, 
    ArticlereaderComponent, 
    HomeComponent
  ],
  imports: [
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
