import { Component, OnInit } from '@angular/core'; 
import {  Input,Output,EventEmitter} from '@angular/core'; 
import {ComponentItem} from '../model/componentitem';
import DeletingConfirmationBoxComponent  from '../deleting-confirmation-box/deleting-confirmation-box.component';

import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-component-item',
  templateUrl: './component-item.component.html',
  styleUrls: ['./component-item.component.css']
})
export class ComponentItemComponent implements OnInit {

  @Input() data:ComponentItem;
  @Output() onClickOnDelete: EventEmitter<String> = new EventEmitter<any>();

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }

  deleteMe(index){
    this.onClickOnDelete.emit(index);

  }

  askToComfirmDialog() {
    const dialogRef = this.dialog.open(DeletingConfirmationBoxComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

