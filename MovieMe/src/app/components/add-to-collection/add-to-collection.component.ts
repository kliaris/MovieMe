import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


export interface DialogData {
  collection:string[]; 
}
@Component({
  selector: 'app-add-to-collection',
  templateUrl: './add-to-collection.component.html',
  styleUrls: ['./add-to-collection.component.scss']
})
export class AddToCollectionComponent implements OnInit {
  selected_collection:string;
  constructor(
    public dialogRef: MatDialogRef<AddToCollectionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  //======================================================//
  //==================  get selected value ===============//
  //======================================================//
  selected(event) {
    this.selected_collection=event.value;
    
}

  ngOnInit() {
  }

}
