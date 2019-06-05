import { Injectable } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
@Injectable({
  providedIn: 'root'
})
export class StorageAssistantService {
  myCollections:any=[];
  constructor(private localStorage: LocalStorage) {
    this.initializeStorage();
  }

  //======================================================//
  //=======  get collections from local storage ==========//
  //======================================================//
  initializeStorage(){
    // this.localStorage.clear().subscribe();
    this.localStorage.getItem('movieMeCollections').subscribe((col)=>{
      if(col){
        this.myCollections=col;
        console.log("Movie colections: ");
        console.log(this.myCollections);
      }else{
        this.myCollections=[];
        console.log("There is no collection for now");
      }
    },error=>{
        
    })
  }

  //====================================================================//
  //=======  collection delete (suppose that title is unique) ==========//
  //====================================================================//
  deleteCollection(index){
    this.myCollections.splice(index,1);
    this.updateCollection();
   
  }

  updateCollection(){
    this.localStorage.setItem('movieMeCollections',this.myCollections).subscribe(()=>{
      console.log("Collections updated!")
    })
  }
}
