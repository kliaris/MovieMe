import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  title: string;
  desription: string;
}

@Component({
  selector: 'app-new-collection-dialog',
  templateUrl: './new-collection-dialog.component.html',
  styleUrls: ['./new-collection-dialog.component.scss']
})

export class NewCollectionDialogComponent implements OnInit {
  

  constructor(
    public dialogRef: MatDialogRef<NewCollectionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
