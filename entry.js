import $ from 'jquery';
import getForm from "./lib/form.data.js";
import insertData from "./lib/insertData.js";
import deleteData from "./lib/deleteData.js";

let form = $("form");
let todo = $("ul.todo");

form.on('submit', function (e) {	
	e.preventDefault();
	var value = getForm(e);
	insertData(value);
	alert(`Add item: ${value}`);
	console.log("submit");
});

todo.on('click', ".btnDel",function(e) {	//e: EventObject
	//$(this).parent().remove();
	deleteData($(this));
	console.log($(this));
});



