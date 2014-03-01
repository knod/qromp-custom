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

	$(".text-row").keydown(function (key) {

		// Always resize the number row to match the text row
		// This only matters if we make text areas work
		// HOW THE HELL DO WE GET RID OF THE LINE AT THE END
		$(".num-row").outerHeight($(".text-row").outerHeight());
		// $(".text-row").elastic();

		// If the enter key was pressled
		if (key.keyCode == 13) {

			// When the user presses enter in a textfield in the
			// visualizer's editor
			// Run a function in texteditor.js that adds a line
			// and updates the row numbers
		}

		// If the delete key was pressed
		else if (false){
			// When the user presses delete in an empty textfield
			// Run a function in texteditor.js that removes a
			// line and updates the row numbers
		}

		// If the up arrow key was pressed
		// If the down arrow key was pressed
	})

	// Testing
	editor.updateNums()

})