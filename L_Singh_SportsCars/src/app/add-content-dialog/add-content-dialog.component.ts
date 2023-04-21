import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-content-dialog',
  templateUrl: './add-content-dialog.component.html',
  styleUrls: ['./add-content-dialog.component.scss']
})
export class AddContentDialogComponent {
  newCard: any = {};

 
  constructor(public dialogRef: MatDialogRef<AddContentDialogComponent>){
 

  }

  closeDialog(): void{
    this.dialogRef.close();
  }
  addCard(){
    this.dialogRef.close(this.newCard);
  }

}
