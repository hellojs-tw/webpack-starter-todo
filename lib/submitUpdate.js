var $ = require('jquery');

module.exports = function(e, value) {
    var target = e.currentTarget;

    //console.log("submitUpdate() receive target.parent, value:", $(target).parent()[0].innerHTML, value);
    $(target).parent()[0].innerHTML = `${value}<button class="btnDel">Delete</button>
    <button class="btnUpd">Update</button>`;
};