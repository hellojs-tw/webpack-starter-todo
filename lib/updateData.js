var $ = require('jquery');

module.exports = function(target){
    // var text = target.parent().text();
    // console.log(text);
    
    // $(this).parent().html() = `Changed<button class="btnDel">Delete</button>
	// <button class="btnUpd">Update</button>`;

    (target.parent())[0].innerHTML = `<input type="text"><button class="btnCancel">Cancel</button>
	<button class="btnSubmit">Submit</button>`;
	// ($(this).parent())[0].innerHTML = `<input type="text"><button class="btnCncel">Cancel</button>
    // <button class="btnSubmit">Submit</button>`;
    
};