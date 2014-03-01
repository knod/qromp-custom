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

	},

	addLine: function (currentLine) {
		/* (element) -> None

		Adds divs below current input, one for the
		rows, one for the text, then numbers the
		rows appropriately.
		*/

		// How do we match up the number row to the
		// text row

		// Does that matter? it can just add a number
		// row anywhere

		// Hmmm, but we have to make it actvie...

	},

	removeLine: function () {

	},

	updateNums: function () {
		/* (None) -> None

		Cycles through all the .num-row rows and
		numbers them in order
		*/

		$(".num-row").each(
			function (thisIndex) {
				$(this).text(thisIndex + 1);
			}
		);

	}
}