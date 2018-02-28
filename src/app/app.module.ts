import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { AppComponent, NotFoundComponent } from './app.component';
import { MoviesComponent } from './list/movies.component';
import { MovieActiveDirective } from './movie-active-hover-effect/movie-active.directive';
import { MovieRatingsPipe } from './movie-ratings/movie-ratings.pipe';

const routes: Routes = [
  {path: 'movie', component: MoviesComponent},
  {path: 'movies/:id', component: MoviesComponent},
  {path: ' ** ', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieActiveDirective,
    MovieRatingsPipe,
    NotFoundComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}