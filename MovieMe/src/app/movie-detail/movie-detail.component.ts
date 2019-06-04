import { Component, OnInit,Input  } from '@angular/core';
import { DataRestAssistantService } from '../services/data-rest-assistant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  //input movieId to fetch the selected movie
  @Input() movieId;
  
  //input for star rating
  @Input('rating') rating: number;
  @Input('starCount') starCount: number;
  @Input('color') color: string;
  
  user_rating:number;
  movie:any;
  constructor(private data:DataRestAssistantService,private router: Router) { }

  //======================================================//
  //  call data rest service to fetch the selected movie  //
  //======================================================//
  async ngOnInit() { 
    this.data.loading=true;  //loading
    this.user_rating=0;  
    // call DataRest Service to fetch the selected movie
    await  this.data.fetchMovie(this.movieId).then(()=>{
      this.movie=this.data.fetched_movie;
      this.data.loading=false;
    },error=>{
      this.router.navigateByUrl('/');
    })
  }
  //======================================================//
  //===== call data rest service to rate this movie ======//
  //======================================================//
  async rate(){
    this.data.loading=true;
      await this.data.get_guest_session();
      await this.data.rate_movie(this.user_rating);
      this.data.loading=false;
  }
}
