var $ = require('jquery');

module.exports = function (data) {
	$("ul.todo").append(`<li>${data}<button class="btnDel">Delete</button></li>`);
	return true;
}