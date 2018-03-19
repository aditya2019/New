import { Component, OnInit, Input , Output , EventEmitter } from '@angular/core';
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
// send -
@Output() sender = new EventEmitter<any>();

//-------
   public errorMsg ='';
   public showError : boolean = false;
  constructor(private jsonApiService: JsonApiService) { }

  ngOnInit() {
  }

addToFavorite(movie) {
    this.jsonApiService.addToFavourite(movie).subscribe((res) =>{
      this.favMovies = res;

      this.sender.emit({
        'moviessend': this.favMovies
      });
    },(error:any)=>{
    this.errorMsg = error.statusText;
    this.showError = true;
        })
  }

}
