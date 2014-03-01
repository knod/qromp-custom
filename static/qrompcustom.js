/* knod 02/28/14
* The general functions for qromp, quantum computer simulator
* 
* ToDo:
* 2. Should text editor functions be called on keypress
* instead in case they hold a key down?
* 
*/

$(document).ready(function () {

	// Make sure .num-row height matches .text-row height
	$(".num-row").outerHeight($(".text-row").outerHeight());

	// Depending on what key is pressed in an input field
	$(".text-row").keydown(function (key) {

		// Identify this textRow
		var $this = $(this)
		// ** Should thid be on keypress instead in case
		// they hold a key down?
		// Affect input fields
		editor.keyFilter(key, $this);
	})

	// Testing
	editor.updateNums()

})