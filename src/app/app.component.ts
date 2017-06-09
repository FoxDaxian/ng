import { Component } from '@angular/core';
@Component({
  selector: 'app',
  template: `
      <h1>ToDoList</h1>
      <input type="text" [(ngModel)]="text" />
      <input type="submit" (click)="addList()">
      <ul *ngFor="let item of todoList">
        <li>{{item}}</li>
      </ul>
      <button (click)="toggle()">出现/消失</button>
      <test-component *ngIf="onoff"></test-component>
      <fsy></fsy>
      <div [ngStyle]="currentStyles">绑定NgStyle</div>
  `,
  styles: [`
        li{
          color: red;
        }
    `],
})
export class AppComponent {
  todoList = ["第一条", "第二条"];
  text = "";
  onoff = false;
  currentStyles = {
    'font-size': "20px",
    'color':"red"
  };
  addList() {
    this.todoList.push(this.text);
  }
  toggle(){
    this.onoff = !this.onoff;
  }
}
