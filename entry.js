import $ from 'jquery';
import getForm from "./lib/form.data.js";
import insertData from "./lib/insertData.js";
import deleteData from "./lib/deleteData.js";
import updateData from "./lib/updateData.js";



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

//刪除按鈕
todo.on('click', ".btnDel",function(e) {	//e: EventObject
	//$(this).parent().remove();
	deleteData($(this));
	console.log($(this));
});

//更改按鈕
todo.on('click', '.btnUpd', function(e) {
	updateData($(this));
	console.log($(this));
});

//呈交按鈕
todo.on('submit', '.btnSubmit', function(e) {
	e.preventDefault();
	var value = getTodo(e);

	console.log($(this));
	submitData($(this));
});

//取消按鈕
todo.on('click', '.btnCancel', function(e){
	//cancel($(this));
	console.log($(this));
});




