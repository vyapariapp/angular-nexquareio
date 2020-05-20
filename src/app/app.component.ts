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
  onClickOnDeleteCalled(id){
     
    for(let i=0;i<this.list.length;i++){
      if(this.list[i].id==id){
         this.list.splice(i,1);
      }
    }
 
 
  }
  ct=0;


  addCompoent(){
    this.ct++;
    
    this.list.push(new ComponentItem(this.ct ));
  }
}

export class ComponentItem{
 title:String='Component ';
 inputPlaceholder:String='Component ';
 value:String;
 id:String="#ddfew";
 pos=0;
 
constructor(index:number ){
  this.pos=index;
  
  this.id=this.id+index.toString();
  this.title=this.title+index.toString();
  this.inputPlaceholder=this.inputPlaceholder+index.toString();
}

}