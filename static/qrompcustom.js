/* knod 02/28/14
* The general functions for qromp, quantum computer simulator
* 
* ToDo:
* 2. Should text editor functions be called on keypress
* instead in case they hold a key down?
* 
*/

$(document).ready(function () {

// *** TEXT EDITOR *** \\
	// Create the first editor row
	textEditor.firstRow();

	// *Has* to be .on, *has* to be delegation
	// Make a tutorial about that somewhere
	// Depending on what key is pressed in an input field
	$("#text-areas").on("keydown", ".text-row", function (key) {

		// Identify this .text-row
		var $this = $(this);

		// ** Should thid be on keypress instead in case
		// they hold a key down?
		// Affect input fields
		textEditor.keyFilter(key, $this);
	})
	.on("focus", ".text-row", function () {
		var $this = $(this)
		textEditor.activateRow($this);
	})
	.on("blur", ".text-row", function () {
		var $this = $(this)
		textEditor.deactivateRow($this);
	})
	;

	// Testing
	textEditor.updateNums();

})