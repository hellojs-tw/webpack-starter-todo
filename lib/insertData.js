var $ = require('jquery');

module.exports = function (data) {
	var item = $('<li></li>');
	//text
	item.append(data);
	//deleteBtn
	var deleteBtn = $('\t<button>刪除</button>');
	deleteBtn.click((e)=>{
		$(e.target).parent().remove(); //真的有remove可以用欸
	})
	item.append(deleteBtn);
	//attach to list
	$("ul.todo").append(item);
	return true;
}