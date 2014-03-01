/* knod 02/28/14
* The general functions for qromp, quantum computer simulator
* 
* Notes:
* 1. Do we want the bottom line of the enditor to remain
* blank for the evaluate button
* 
*/

$(document).ready(function () {

	$(".num-row").outerHeight($(".text-row").outerHeight());

	// Depending on what key is pressed in an input field
	$(".text-row").keydown(function (key) {
		// Affect input fields
		editor.keyFilter(key);
	})

	// Testing
	editor.updateNums()

})