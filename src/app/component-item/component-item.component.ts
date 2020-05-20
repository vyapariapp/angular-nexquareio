import { Component, OnInit } from '@angular/core'; 
import {  Input,Output,EventEmitter} from '@angular/core'; 
import {ComponentItem} from '../model/componentitem';
 
import { DeletingConfirmationBoxComponent } from "/~/src/app/deleting-confirmation-box/deleting-confirmation-box.component"
 
@Component({
  selector: 'app-component-item',
  templateUrl: './component-item.component.html',
  styleUrls: ['./component-item.component.css']
})
export class ComponentItemComponent implements OnInit {

  @Input() data:ComponentItem;
  @Output() onClickOnDelete: EventEmitter<String> = new EventEmitter<any>();

 

  ngOnInit() {
  }

  deleteMe(index){
   this.askToComfirmDialog(index);

  }

  askToComfirmDialog(index) {
   
  var r = confirm("Are you sure\n You want to delete this component");
  if (r == true) {
   this.onClickOnDelete.emit(index);
  } else {
    
  }
    
  }

}

