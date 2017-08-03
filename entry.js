import $ from 'jquery';
import getForm from "./lib/form.data.js";
import insertData from "./lib/insertData.js";
import deleteData from "./lib/deleteData.js";
import updateData from "./lib/updateData.js";
import getTodo from "./lib/todo.data.js";


let form = $("form");
let todo = $("ul.todo");

form.on('submit', function (e) {	
	e.preventDefault();
	var value = getForm(e);
	if(value === undefined){
		alert("請輸入內容");
	} else{
		insertData(value);
		alert(`Add item: ${value}`);
		console.log("submit");
	}
});

//Delete button
todo.on('click', ".btnDel",function(e) {	//e: EventObject
	//$(this).parent().remove();
	deleteData($(this));
	console.log($(this));
});

//Update button
todo.on('click', '.btnUpd', function(e) {
	updateData($(this));
	console.log($(this));
});

//按下Updata後出現的Submit button
todo.on('click', '.btnSubmit', function(e) {
	e.preventDefault();
	var value = getTodo(e);

	console.log($(this));
	
});

//按下Updata後出現的Cancel button
todo.on('click', '.btnCancel', function(e){
	//cancel($(this));
	console.log($(this));
});




