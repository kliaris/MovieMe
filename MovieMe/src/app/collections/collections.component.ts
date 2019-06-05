import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NewCollectionDialogComponent } from '../components/new-collection-dialog/new-collection-dialog.component';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { StorageAssistantService } from '../services/storage-assistant.service';
@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {
  title: string;
  description: string;

  
  constructor(public dialog: MatDialog,private storageAssistant:StorageAssistantService) { 

  }
  
  ngOnInit() {
    
  }
  //==================================================================================//
  //====== open modal to create a new collection (suppose that title is unique)=======//
  //==================================================================================//
  openToCreateNewCollection(){
    const dialogRef = this.dialog.open(NewCollectionDialogComponent, {
      width: '250px',
      data: {title: this.title, description: this.description}
    });

    dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');      

        console.log(result) ;
        //update my storage collection
        this.storageAssistant.myCollections.push(result);
        this.storageAssistant.updateCollection();
        
    });
  }
  

}
