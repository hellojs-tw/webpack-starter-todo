import $ from 'jquery';
import getForm from "./lib/form.data.js";
import insertData from "./lib/insertData.js";
import deleteData from "./lib/deleteData.js";

let form = $("form");

form.on('submit', function(e) {
    e.preventDefault();
    var value = getForm(e);
    insertData(value);
    alert(`Add item: ${value}`);
});

$('ul.todo').on('click', '.delete', (e) => {
    let text = e.currentTarget.parentElement.firstChild.textContent;
    if (confirm(`確定刪除:${text}？`))
        deleteData(e.currentTarget.parentElement);
});