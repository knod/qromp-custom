/* knod 02/28/14
* texteditor.js
* Manages the changing inputs of the visualizer's editor
*/

var editor = {
	/* Enclosure for text editor functions */

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