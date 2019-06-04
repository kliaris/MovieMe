import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataRestAssistantService {
  url:string="https://api.themoviedb.org/3";
  api_key:string="85204a8cc33baf447559fb6d51b18313";
 

  search_api="/search/movie";
  search_result:any={};

  constructor(private http:HttpClient) { }


  get_movie_search(searchString,page){
      
      return this.http.get(this.url+this.search_api+"?api_key="+this.api_key+"&page="+page+"&query="+searchString)
      .subscribe(res=>{      
       
        this.search_result=res;
        this.search_result.results.forEach(movie => {
            movie.poster_path="http://image.tmdb.org/t/p/w185"+movie.poster_path;
        });
        console.log(this.search_result);
        console.log("Data retrieved from server succesfully");
      },error=>{
        this.search_result={};
        console.log("No Data from server for: "+ searchString);
      })
  }

  check_valid_response(){}
}
