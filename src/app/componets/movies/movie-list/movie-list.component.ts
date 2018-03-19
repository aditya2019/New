import { Component, OnInit, Input , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

	@Input() public movies: Array<String>  = [];
   public movieobj= [];
//send ----
@Output() movielisttomovies = new EventEmitter<any>();
//----------
  constructor() { }

  ngOnInit() {
    this.movielisttomovies.emit({
      'sendltoms': this.movieobj
    });
  }

}
