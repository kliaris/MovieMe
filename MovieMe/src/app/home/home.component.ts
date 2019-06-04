import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { DataRestAssistantService } from '../services/data-rest-assistant.service';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  breakpoint:any;
  searcForm:any;

  // MatPaginator Output
  pageEvent: PageEvent;
  constructor(private data:DataRestAssistantService) { }

  ngOnInit() {
    //set the cols attribute of the mat-grid-list dynamically depending on the screen width
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 6;
    
    this.searcForm = new FormGroup({
      movieName: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('^[a-zA-Z0-9 ]*$')]))    
    }); 
  }
  onResize(event) {              // responsive width for mobiles
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 6;
  }
  async onSubmitSearch(){        // onSubmit form call data-rest service to get results
      this.data.loading=true;
      await this.data.get_movie_search(this.searcForm.value.movieName,1);
      this.data.loading=false;
      // this.pageSize=this.data.search_result.results.length;
  }

  async changePage(event){              // onChange paginator (click arrows)
    this.data.loading=true;
    this.pageEvent=event;
    await this.data.get_movie_search(this.searcForm.value.movieName,this.pageEvent.pageIndex+1);
    this.data.loading=false;
  }

}
