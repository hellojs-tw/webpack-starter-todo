import deleteData from './deleteData.js';
var $ = require('jquery');

module.exports = function(data) {
    let item = $(`<li>${data}</li>`);
    let del_btn = $("<button>delete</button>");
    item.append(del_btn);
    del_btn.on('click', (e) => {
        if (confirm(`刪除${data}?`))
            deleteData(e.currentTarget.parentElement);
    });
    $("ul.todo").append(item);

    return true;
}