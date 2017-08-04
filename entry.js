import $ from 'jquery';
import getForm from "./lib/form.data.js";
import insertData from "./lib/insertData.js";
import deleteData from "./lib/deleteData.js";
import updateData from "./lib/updateData.js";
import getTodo from "./lib/todo.data.js";
import submitUpdate from "./lib/submitUpdate.js";
import cancel from "./lib/cancel.js";

let form = $("form");
let todo = $("ul.todo");	//Todo List


form.on('submit', function (e) {	
	//console.log('form.on: ', $(this));
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

//監聽Delete button
todo.on('click', ".btnDel",function(e) {	//e: EventObject
	//$(this).parent().remove();
	deleteData($(this));
	console.log($(this));
});

//監聽Update button
todo.on('click', '.btnUpd', function(e) {
	updateData($(this));
	console.log("onClick:", $(this));
});

//監聽按下Updata後出現的button Decide 
todo.on('click', '.btnDeci', function(e) {
	e.preventDefault();
	console.log("onClick: ", $(this));
	
	var value = getTodo(e);
	console.log('getTodo: ', value);
	if(value === undefined){
		alert("請輸入");
	} else{
		submitUpdate(e, value);
	}
	//console.log($(this));
	
	
});

//監聽按下Updata後出現的Cancel button
todo.on('click', '.btnCancel', function(e){
	console.log("onClick: ", $(this));
	cancel($(this));
});




