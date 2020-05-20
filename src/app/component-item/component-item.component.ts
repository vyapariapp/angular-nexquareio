import { Component, OnInit } from '@angular/core'; 
import {  Input,Output,EventEmitter} from '@angular/core'; 
import {ComponentItem} from '../model/componentitem';
@Component({
  selector: 'app-component-item',
  templateUrl: './component-item.component.html',
  styleUrls: ['./component-item.component.css']
})
export class ComponentItemComponent implements OnInit {

  @Input() data:ComponentItem;
  @Output() onClickOnDelete: EventEmitter<number> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  deleteMe(index){
    this.onClickOnDelete.emit(index);

  }

}

