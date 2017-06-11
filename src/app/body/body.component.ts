import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../fadeIn';

@Component({
	selector: 'my-body',
	templateUrl:"body.html",
	styleUrls:["body.css"],
	animations: [fadeIn] 
})
export class AppBody implements OnInit{
	constructor() { 

	}

	mytexd : Boolean = true;

	ToDoListData : Array<any> = [];
	ngOnInit(){
		this.ToDoListData = ["ng4","vue","react"];
	}

	addOne( arg ){
		if( arg.value.trim() !== "" ){
			this.ToDoListData.push(arg.value);
			arg.value = "";
		}else{
			alert('不能为空');
		}
	}
	deleteThis( index ){
		window.confirm("真的要删除该事项？") && this.ToDoListData.splice( index, 1 );
	}
}
