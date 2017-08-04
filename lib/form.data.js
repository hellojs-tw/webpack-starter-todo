import $ from 'jquery';

module.exports = function (e) {
	var target = e.currentTarget;
	console.log(`currentTarget:${target}`);
	var inputNode = $(target).find('input[name=item]');
	var inputValue = inputNode.val();
	inputNode.val('').focus();	//?
	return inputValue;
};