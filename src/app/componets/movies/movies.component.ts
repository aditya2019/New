import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
	public movies =[];
  public movieobj=[];
  public flag = 'search';
  constructor() {

  }

  ngOnInit() {
  }
setfavmovi(event)
{
  this.movieobj=event.sendltoms;
  console.log(this.movieobj);
}
  // Update movies list based on search text
  setMovielist(event) {
  	this.movies = event.moviesList;

  }
}
