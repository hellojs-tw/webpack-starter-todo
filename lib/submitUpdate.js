var $ = require('jquery');

module.exports = function(target, data) {
    console.log("submitUpdate() receive target, value:", $(target).find('li'), data);
    $(target).find('li')[0].innerHTML = `${data}<button class="btnDel">Delete</button>
    <button class="btnUpd">Update</button>`;
};