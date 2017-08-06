import deleteData from './deleteData.js';
var $ = require('jquery');

module.exports = function(data) {
    $("ul.todo").append(`<li>${data}<button class="delete">delete</button></li>`);
    return true;
}