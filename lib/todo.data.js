import $ from 'jquery';

module.exports = function (e) {
	var target = e.currentTarget;
	console.log(`currentTarget:${target}`);	//currentTarget === this

	var inputNode = $(target).find('input[name=item]');
	console.log(inputNode);
	var inputValue = inputNode.val();
	inputNode.val('').focus();
	console.log("inputValue:", inputValue);
	return inputValue;
	// var inputNode = $(target).find('input[name=item]');
	// var inputValue = inputNode.val();
	// inputNode.val('').focus();	//?
	// return inputValue;
};