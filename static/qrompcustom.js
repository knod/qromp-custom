/* knod 02/28/14
* The general functions for qromp, quantum computer simulator
* 
* ToDo:
* 2. Should text editor functions be called on keypress
* instead in case they hold a key down?
* 
*/

$(document).ready(function () {

	// Create the first editor row
	textEditor.firstRow();

	// Depending on what key is pressed in an input field
	$(".text-row").keydown(function (key) {

		// Identify this textRow
		var $this = $(this)
		// ** Should thid be on keypress instead in case
		// they hold a key down?
		// Affect input fields
		textEditor.keyFilter(key, $this);
	})

	// Testing
	textEditor.updateNums()

})