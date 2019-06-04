import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataRestAssistantService {
  loading:boolean = false;                              // if true then we have a loading component in view

  url:string="https://api.themoviedb.org/3";      
  api_key:string="85204a8cc33baf447559fb6d51b18313";    //API key for calls with server
 
  //==================
  search_api="/search/movie";    
  search_result:any={};
  //==================
  fetch_api="/movie";
  fetched_movie:any={};
  //==================
  guest_session_api="/authentication/guest_session/new";
  session_id:any={};
  //==================
  rate_api="/movie/"+this.fetched_movie.id+"/rating"; 
  fix_rate_api(movieId){
    this.rate_api="/movie/"+movieId+"/rating"
  }

  // headers for APi calls
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json;charset=utf-8'
    })
  };
  
  constructor(private http:HttpClient) { }

  //======================================================//
  //=====  API call to search a movie by a stricg ========//
  //======================================================//
  async get_movie_search(searchString,page){
      
      return await  this.http.get(this.url+this.search_api+"?api_key="+this.api_key+"&page="+page+"&query="+searchString).toPromise()
      .then(res=>{       
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
  //======================================================//
  //=======  API call to get a specific movie ============//
  //======================================================//
  async fetchMovie(movieId){
    return await this.http.get(this.url+this.fetch_api+"/"+movieId+"?api_key="+this.api_key).toPromise()
    .then(res=>{           
      this.fetched_movie=res;
      this.fetched_movie.poster_path="http://image.tmdb.org/t/p/w185"+this.fetched_movie.poster_path;
      console.log(this.fetched_movie);
      console.log("Data retrieved from server succesfully");
    },error=>{
      this.fetched_movie={};
      console.log("No Data from server for movie with id: "+ movieId);
    })
  }
  //======================================================//
  //======  API call to get a guest session id ===========//
  //======================================================//
  async get_guest_session(){
    return await this.http.get(this.url+this.guest_session_api+"?api_key="+this.api_key).toPromise()
    .then(res=>{                
      this.session_id=res;
      console.log(this.session_id);
      console.log("Server authenticate you succesfully");
    },error=>{
      this.session_id={};
      console.log("Unable to get guest session from server");
    })
  }
  //======================================================//
  //===========  API call to rate a movie ================//
  //======================================================//
  async rate_movie(rate){
    await this.fix_rate_api(this.fetched_movie.id);
    console.log(this.fetched_movie.id);
    let data={
        value:rate
    }
    return await this.http.post(this.url+this.rate_api+"?api_key="+this.api_key+"&guest_session_id="+this.session_id.guest_session_id,data,this.httpOptions).toPromise()
    .then(res=>{ 
      console.log(res)        
      if(res['status_message']=='Success.'){
          console.log("You rate succesfully");
      }
    },error=>{
      console.log(error);
      this.fetched_movie={};
      console.log("Unable to rate");
    })
  }
  //======================================================//
  //===============  Check the response ==================//
  //======================================================//
  check_valid_response(){}
}
