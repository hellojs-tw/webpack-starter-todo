//var $ = require('jquery');
import $ from 'jquery'

let count = 0;

function insert(data) {
	
	// $("ul.todo").append(`<li>${data}</li>`);
	var ul = document.querySelector('ul.todo');
	var li = document.createElement('li');

	count++;

	li.innerHTML = `
		<div id=${count}>
			<p>${data}</p>
			<button>X</button>
		</div>
	`;

	ul.appendChild(li);

	console.log('ul', ul);
	console.log('li', li);
	return true;
}

export default insert