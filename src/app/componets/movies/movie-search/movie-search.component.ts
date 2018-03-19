import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TmdbApiService } from '../../../services/tmdb-api.service';
@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css'],
  providers:[TmdbApiService]
})
export class MovieSearchComponent implements OnInit {

	@Output() success = new EventEmitter<any>();
	public searchedText: string='';
	public moviesList=[];

  constructor(private movieService : TmdbApiService) { }

  ngOnInit() {
  }

  // Function to get search text and make service call to get movies fromTMDB
  searchMovie() {
  	this.movieService.searchMovie(this.searchedText).subscribe((res) =>{
  	this.moviesList = res.results;
  	this.success.emit({
      'moviesList': this.moviesList
    });
  	}, (error) =>{

  	})
  }

}
