var $ = require('jquery');

module.exports = function (data) {
	$("ul.todo").append(`<li>${data}<button class="btnDel">Delete</button>
	<button class="btnUpd">Update</button></li>`);
	return true;
}