/* knod 02/28/14
* The general functions for qromp, quantum computer simulator
*/

$(document).ready(function () {

	$(".num-row").outerHeight($(".text-row").outerHeight());

	$(".text-row").keydown(function (key) {

		$(".num-row").outerHeight($(".text-row").outerHeight());
		// $(".text-row").elastic();

		if (key.keyCode == 13) {

			// When the user presses enter in a textfield in the
			// visualizer's editor
			// Run a function in texteditor.js that adds a line
			// and updates the row numbers
	
			// When the user presses delete in an empty textfield
			// Run a function in texteditor.js that removes a
			// line and updates the row numbers
		}

	})

	// Testing
	editor.updateNums()

})