import { Component, OnInit} from '@angular/core';
import { JsonApiService } from '../../services/json-api.service';
//----------
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-fav-movies',
  templateUrl: './fav-movies.component.html',
  styleUrls: ['./fav-movies.component.css'],
  providers:[JsonApiService]
})
export class FavMoviesComponent implements OnInit {
  public finaldata : any=[];
  public flag='list';
  constructor(private jsonApiService: JsonApiService,private route:ActivatedRoute) {

   }

  ngOnInit() {
    this.getFavourite();
  }

  getFavourite() {
      this.jsonApiService.getFavourite().subscribe((res) =>{
        this.finaldata = res;
      },(error:any)=>{

          })
    }

}
