import $ from 'jquery';

module.exports = function (e) {
	console.log(e);
	var target = e.currentTarget;
	var inputNode = $(target).find('input[name=item]');
	var inputValue = inputNode.val();
	inputNode.val('').focus();
	return inputValue;
};