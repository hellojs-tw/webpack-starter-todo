import deleteData from "../practice/2017-kaya/deleteData"

var count = 0;

function insertData(data){
	count++;	
	var ul = document.querySelector('ul')
	ul.innerHTML = ul.innerHTML + `
		<li id="list-${count}">
			<p>${data}</p>
			<button>X</button>
		</li>
	`
	var button = document.querySelector(`#list-${count} button`)
	var li = document.querySelector('li')
	button.onclick = function(event) {
		deleteData(event);
	}
	
}

export default insertData