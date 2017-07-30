import deleteData from './deleteData.js';
var $ = require('jquery');

module.exports = function(data) {
    let time = new Date().getTime();
    $("ul.todo").append(`<li>${data}<button id='${time}'>delete</button></li>`);

    let button = $(`button[id=${time}]`);
    button.on('click', (e) => {
        if (confirm('刪除？'))
            deleteData(e.currentTarget.parentElement);
    });
    return true;
}