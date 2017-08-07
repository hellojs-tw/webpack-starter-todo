import $ from 'jquery';
import getForm from "./lib/form.data.js";
import insertData from "./lib/insertData.js";
import deleteData from "./lib/deleteData.js";

let form = $("form");

form.on('submit', function (e) {
	e.preventDefault();
	var value = getForm(e);
	insertData(value);
	alert(`Add item: ${value}`);
});

let todo = $('ul.todo');

todo.on('click', 'button', (data) => {
	let deleteTarget = data.currentTarget.parentElement;
	deleteData(deleteTarget);
});


