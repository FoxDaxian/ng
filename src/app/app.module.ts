import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';//你引入进来了，你得使用吧，你不用引入进来干JB

import { AppComponent } from './app.component';
import { TestComponent } from "./test.component";
import { Feng } from "./fengshiyu.component";


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Feng
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
