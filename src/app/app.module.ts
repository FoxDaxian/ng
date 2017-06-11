import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";//ng 封装好了动画，你需要引入相应的模块，才能进行操作，别忘了在下面使用
//用于双向绑定
import { FormsModule } from '@angular/forms';//你引入进来了，你得使用吧，你不用引入进来干JB

import { AppComponent } from './app.component';
import { AppHeader } from "./header/header.component";
import { AppBody } from "./body/body.component";
import { AppFoot } from "./footer/foot.component";


@NgModule({
  declarations: [
    AppComponent,
    AppHeader,
    AppBody,
    AppFoot
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
