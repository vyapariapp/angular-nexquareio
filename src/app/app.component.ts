import { Component, VERSION } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'; 
 
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  list:ComponentItem[]=[];
  onClickOnDeleteCalled(index){
    
    this.list.splice(index-1,1);
    this.realIndex--;
  }
  ct=0;
  realIndex=0;
  addCompoent(){
    this.ct++;
    this.realIndex++;
    this.list.push(new ComponentItem(this.ct,this.realIndex));
  }
}

export class ComponentItem{
 title:String='Component ';
 inputPlaceholder:String='Component ';
 value:String;
 id:String="#ddfew";
 pos=0;
 realIndex=0;
constructor(index:number,indexR:number){
  this.pos=index;
  this.realIndex=indexR;
  this.id=this.id+index.toString();
  this.title=this.title+index.toString();
  this.inputPlaceholder=this.inputPlaceholder+index.toString();
}

}