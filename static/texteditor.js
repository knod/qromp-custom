/* knod 02/28/14
* texteditor.js
* Manages the changing inputs of the visualizer's editor
* 
* ToDo:
* - FIGURE OUT WHY A TEXTAREA HAS AN EXTRA SPACE AT THE
* BOTTOM AND HOW TO GET RID OF IT.
* - Figure out why .num-row height doesn't change when
* pasting text.
* - Figure out why height of .text-row changes so that
* we don't have to cycle through all the .text-rows to
* get the right height.
* - Do we want the bottom line of the editor to remain
* blank for the evaluate button
* 
* DONE:
* [DONE] - The first text input does not have row one
* as it's data value
* 
*/

var textEditor = {
	/* Enclosure for text editor functions */

	// The colors for an activated row
	activeNumRow: "#dcdcdc",
	activeTextRow: "#f0f0f0",

	firstRow: function () {
		/* (None) -> None

		Creates the first text editor row. Why here?
		Because we want to have the .num-row and the
		.text-row paired.
		*/

		// Create the .num-row div
		var $newNumRow = $("<div class='num-row'></div>");
		// Create the .text-row input
		var $newTextRow = $("<textarea class='text-row'></textarea>")
		// Store the .num-row as the .text-row's data value
		.data("numRow", $newNumRow);

		// Append them as the first in their divs
		$("#text-areas").append($newTextRow);
		$("#num-gutter").append($newNumRow);

		// Make sure .num-row height matches .text-row height
		$newNumRow.outerHeight($newTextRow.outerHeight());

		// Do we want to focus the mouse here at the start?
		$newTextRow.focus();
	},

	keyFilter: function (key, $textRow) {
		/* (int) -> None

		Calls further function depending on
		value of key.
		*/

		// Always resize this .num-row to match this .text-row
		// This only matters if we make text areas work
		// HOW THE HELL DO WE GET RID OF THE LINE AT THE END
		$textRow.data("numRow").outerHeight($textRow.outerHeight());

		// Expands the input textarea size to show all text
		$textRow.autosize();

		// If the enter key was pressled
		if (key.keyCode == 13) {
			// Will probably need to stop propagation and
			// default

			// Add a line and updates the row numbers
			textEditor.addRow($textRow);
		}

		// If the delete key was pressed
		else if (key.keyCode == 8) {
			// Will probably need to stop propagation and
			// default

			// Do not remove the first row
			if ($(".text-row").length - 1) {
				// If there's no text in the row
				if (!$textRow.val()) {
					// Run a function in texteditor.js that removes a
					textEditor.removeRow($textRow);
					// line and updates the row numbers
				}
			}
		}

		// If the up arrow key was pressed
		// If the down arrow key was pressed

	},

	addRow: function ($textRow) {
		/* (element) -> None

		Adds divs below current input, one for the
		rows, one for the text, then numbers the
		rows appropriately. Moves curosr to the new
		input field
		*/

		// Create the .num-row div
		var $newNumRow = $("<div class='num-row'></div>");
		// Create the .text-row input
		var $newTextRow = $("<textarea class='text-row'></textarea>")
		// Store the .num-row as the .text-row's data value
		.data("numRow", $newNumRow);

		// Append new text input under this text input
		$textRow.after($newTextRow);
		// Append new .num-row using the current .text-row's data
		$textRow.data("numRow").after($newNumRow);

		// XMake newnumRow height same as newTextRow
		// !!! WHY IS SOMETHING STILL GETTING EXTRA PADDING?!!
		// Not padding, size of .text-row changes after creation
		// for some reason. So here we will resize everything on
		// new row creation so that it isn't done with every keydown
		$(".text-row").each(function () {
			$this = $(this);
			$this.data("numRow").outerHeight($this.outerHeight());
		});

		// Move the cursor to the new .text-row input
		$newTextRow.focus();

		// Re-number the rows
		textEditor.updateNums();
	},

	removeRow: function ($textRow) {
		/* (element) -> None

		Deletes this input and it's matching .num-row,
		then numbers the rows appropriately. Moves curosr
		to the previous input field.
		*/

		// Move the cursor to the previous input field
		$textRow.prev().focus();
		// Remove the .num-row in this .text-row's data value
		$textRow.data("numRow").remove();
		// Remove this .text-row
		$textRow.remove();
		// Update the row numbers
		textEditor.updateNums();
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

	activateRow: function ($textRow) {
		/* (element) -> None

		Change the colors of $textRow to the
		active colors.
		*/

		// Change $textRow's color
		$textRow.css("background", this.activeTextRow);
		// Change color of $textRow's numRow data value
		$textRow.data("numRow").css("background", this.activeNumRow);
	},

	deactivateRow: function ($textRow) {
		/* (element) -> None

		Remove the colors of $textRow.
		*/

		// Remove $textRow's color
		$textRow.css("background", "");
		// Remove color of $textRow's numRow data value
		$textRow.data("numRow").css("background", "");
	},
}