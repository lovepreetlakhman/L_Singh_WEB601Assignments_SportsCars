import { Component, Output, EventEmitter } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { AddContentDialogComponent } from '../add-content-dialog/add-content-dialog.component';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent {
  


  newCard: any = {};
 @Output() onCreation = new EventEmitter<Content>();
 
 addCard(){
  this.onCreation.emit(this.newCard);
  this.newCard = {};
 }
 constructor(public dialog:MatDialog){}
 
 openDialog():void{
  const dialogRef = this.dialog.open(AddContentDialogComponent);
  dialogRef.afterClosed().subscribe(result => {
    if (result){
      this.newCard = result;
      this.addCard();
    }
  });
}
}