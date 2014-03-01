/* knod 02/28/14
* texteditor.js
* Manages the changing inputs of the visualizer's editor
* 
* ToDo:
* 1. Do we want the bottom line of the enditor to remain
* blank for the evaluate button
* 
*/

var editor = {
	/* Enclosure for text editor functions */

	// The colors for an activated row
	activeNumRow: "#dcdcdc",
	activeTextRow: "#f0f0f0",

	keyFilter: function (key) {
		/* (int) -> None

		Calls further function depending on
		value of key.
		*/

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

			// Add a line and updates the row numbers

		}

		// If the delete key was pressed
		else if (false){
			// When the user presses delete in an empty textfield
			// Run a function in texteditor.js that removes a
			// line and updates the row numbers
		}

		// If the up arrow key was pressed
		// If the down arrow key was pressed

	},

	addLine: function (textRow) {
		/* (element) -> None

		Adds divs below current input, one for the
		rows, one for the text, then numbers the
		rows appropriately. Moves curosr to the new
		input field
		*/

		// WITH DATA VALUES
		// How do we match up the number row to the
		// text row

		// Does that matter? it can just add a number
		// row anywhere

		// Hmmm, but we have to make it actvie...

		// Create the .num-row div
		// Create the .text-row input
		// Store the .num-row as the .text-row's data value
		// Append the divs to editor using the current .text-row's
		// .num-row data value to add the new .num-row
		// Move the cursor to the new .text-row input
		// Activate the new row
		// Deactivate this row

		// Renumber the rows
		editor.updateNums();

	},

	removeLine: function (textRow) {
		/* (element) -> None

		Deletes this input and it's matching .num-row,
		then numbers the rows appropriately. Moves curosr
		to the previous input field.
		*/

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