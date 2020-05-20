import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ComponentItemComponent } from './component-item/component-item.component';
import { DeletingConfirmationBoxComponent } from './deleting-confirmation-box/deleting-confirmation-box.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ComponentItemComponent, DeletingConfirmationBoxComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
