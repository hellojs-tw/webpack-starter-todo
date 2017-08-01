var $ = require('jquery');

module.exports = function(target){
    //$(this).parent().remove();
    target.parent().remove();
	console.log("deleteData");
    return true;
};