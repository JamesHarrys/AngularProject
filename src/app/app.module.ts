import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { MoviesComponent } from './list/movies.component';
import { MovieActiveDirective } from './movie-active-hover-effect/movie-active.directive';
import { MovieRatingsPipe } from './movie-ratings/movie-ratings.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieActiveDirective,
    MovieRatingsPipe
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}