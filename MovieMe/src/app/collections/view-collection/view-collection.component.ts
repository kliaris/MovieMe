import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { StorageAssistantService } from 'src/app/services/storage-assistant.service';
import { LocalStorage } from '@ngx-pwa/local-storage';
@Component({
  selector: 'app-view-collection',
  templateUrl: './view-collection.component.html',
  styleUrls: ['./view-collection.component.scss']
})
export class ViewCollectionComponent implements OnInit {
  title:any;
  collection:any;
  constructor(private route: ActivatedRoute,public storageAssistant:StorageAssistantService,private localStorage: LocalStorage) { }
  
  //======================================================//
  //========= get the collection title to view ===========//
  //======================================================//
  async ngOnInit() {
    await this.route.paramMap.pipe(map((parameters:any)=>parameters.params.title)).subscribe(async (title)=>{
      this.title=title;
      console.log(title);

      this.collection=await this.storageAssistant.myCollections.filter(x=>x.title==this.title);
      console.log(this.collection);
    })
  }
  //======================================================//
  //========= get the collection title to view ===========//
  //======================================================//
  deleteFromCollection(title,index){
    console.log(this.storageAssistant.myCollections);
    console.log(title);

    console.log("delete not working for now");
        // for(let i=0;i<this.storageAssistant.myCollections.length;i++){
        //   if(this.storageAssistant.myCollections.title==this.title){
        //     for(let y=0;y<this.storageAssistant.myCollections[i].movies.length;y++){
              
        //       if(this.storageAssistant.myCollections[i].movies[y].title==title){
        //         //console.log(i);
        //         this.storageAssistant.myCollections[i].movies.splice(y,1);
        //         break;
        //       }
        //     }
        //     break;
        //   }
        // }
        // this.collection.splice(index,1);
        // this.storageAssistant.updateCollection();
        // console.log(this.collection);
  }
}
