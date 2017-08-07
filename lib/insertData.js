var $ = require('jquery');

module.exports = function (data) {
	$("ul.todo").append(`<li>${data}<button>delete</button></li>`);
	return true;
}