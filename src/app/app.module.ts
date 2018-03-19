import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MoviesComponent } from './componets/movies/movies.component';
import { MovieSearchComponent } from './componets/movies/movie-search/movie-search.component';
import { MovieListComponent } from './componets/movies/movie-list/movie-list.component';
import { MovieComponent } from './componets/movies/movie-list/movie/movie.component';
import { FavMoviesComponent } from './componets/fav-movies/fav-movies.component';
import { FavMovieComponent } from './componets/fav-movies/fav-movie/fav-movie.component';
import { HeaderComponent } from './componets/shared/header/header.component';
import { FooterComponent } from './componets/shared/footer/footer.component';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes :Routes = [
  {path: '', redirectTo:'/movies',pathMatch:'full'},
  {path: 'movies', component:MoviesComponent},
  {path: 'favourite', component:FavMoviesComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieSearchComponent,
    MovieListComponent,
    MovieComponent,
    FavMoviesComponent,
    FavMovieComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
