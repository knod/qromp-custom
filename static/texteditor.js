/* knod 02/28/14
* texteditor.js
* Manages the changing inputs of the visualizer's editor
* 
* ToDo:
* 1. Do we want the bottom line of the enditor to remain
* blank for the evaluate button
* 2. The first text input does not have row one
* as it's data value
* 
*/

var editor = {
	/* Enclosure for text editor functions */

	// The colors for an activated row
	activeNumRow: "#dcdcdc",
	activeTextRow: "#f0f0f0",

	keyFilter: function (key, textRow) {
		/* (int) -> None

		Calls further function depending on
		value of key.
		*/

		// Testing
		console.log("Using textRow: " + textRow.attr("class"));

		// AN ISSUE:
		// The first text input does not have row one
		// as it's data value

		// We can do just this one instead of cycling through
		// all of them. Once we fix that issue
		// Always resize the number row to match the text row
		// This only matters if we make text areas work
		// HOW THE HELL DO WE GET RID OF THE LINE AT THE END
		$(".num-row").each(function () {
			$(this).outerHeight($(".text-row").outerHeight());
		});

		// Expands the input textarea size to show all text
		// $(".text-row").elastic();

		// If the enter key was pressled
		if (key.keyCode == 13) {
			// Will probably need to stop propagation and
			// default

			// Add a line and updates the row numbers
			addRow(textRow);
		}

		// If the delete key was pressed
		else if (false){
			// Will probably need to stop propagation and
			// default

			// When the user presses delete in an empty textfield
			// Run a function in texteditor.js that removes a
			// line and updates the row numbers
		}

		// If the up arrow key was pressed
		// If the down arrow key was pressed

	},

	addRow: function (textRow) {
		/* (element) -> None

		Adds divs below current input, one for the
		rows, one for the text, then numbers the
		rows appropriately. Moves curosr to the new
		input field
		*/

		// Create the .num-row div
		var newNumRow = $("<div class='num-row'></div>");
		// Create the .text-row input
		var newTextRow = $("<textarea class='text-row'></textarea>")
		// Store the .num-row as the .text-row's data value
		.data("numRow", newNumRow);

		// Append new text input under this text input
		textRow.after(newTextRow);
		// Append new .num-row using the current .text-row's data
		textRow.data("numRow").after(newNumRow);

		// Move the cursor to the new .text-row input
		newTextRow.focus();

		// Activate the new row
		// Deactivate this row

		// Renumber the rows
		editor.updateNums();

	},

	removeRow: function (textRow) {
		/* (element) -> None

		Deletes this input and it's matching .num-row,
		then numbers the rows appropriately. Moves curosr
		to the previous input field.
		*/

		// Do not remove the first row

		// Move the cursor to the previous input field
		// Remove the .num-row in this .text-row's data value
		// 
	},

	updateNums: function () {
		/* (None) -> None

		Cycles through all the .num-row rows and
		numbers them in order
		*/

		$(".num-row").each(
			function (thisIndex) {
				$(this).text(thisIndex + 1);
			});
	},

	activateRow: function (textRow) {
		/* (element) -> None

		Change the colors of textRow to the
		active colors.
		*/

		// Change textRow's color
		// Change color of textRow's numRow data value
	},

	deactivateRow: function (textRow) {
		/* (element) -> None

		Remove the colors of textRow.
		*/

		// Remove textRow's color
		// Remove color of textRow's numRow data value
	},
}