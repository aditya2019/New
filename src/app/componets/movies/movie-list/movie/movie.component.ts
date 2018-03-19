import { Component, OnInit, Input } from '@angular/core';
import { JsonApiService } from '../../../../services/json-api.service';
import { AppConfig } from '../../../../config/config.constant';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  providers:[JsonApiService]
})
export class MovieComponent implements OnInit {
	@Input() movie: any;
  public movieUrl=AppConfig.baseUrl;
  public favMovies : any =[];
   public errorMsg ='';
   public showError : boolean = false;
  constructor(private jsonApiService: JsonApiService) { }

  ngOnInit() {

  }

// Add favourite movie to database
//addMovie(movie) {
// 	this.movieService.addMovie(movie).subscribe((res) =>{
//	}, (error) =>{
//  })
//   }

addToFavorite(movie) {
    this.jsonApiService.addToFavourite(movie).subscribe((res) =>{
      this.favMovies = res;
      
    },(error:any)=>{
    this.errorMsg = error.statusText;
    this.showError = true;
        })
  }

// Add favourite movie to  json

}
