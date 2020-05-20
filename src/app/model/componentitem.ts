export class ComponentItem{
 title:String='Component ';
 inputPlaceholder:String='Component ';
 value:String;
id:String="anyid";
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