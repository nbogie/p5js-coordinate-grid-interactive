// A basic coordinate system reference diagram and tool for students and teachers
// See interaction tab.
function setup() {
	createCanvas(400, 400);
	noCursor();
	textAlign(CENTER, CENTER);
	resetAllMarkers();
	// noLoop();
}

function draw() {
	background(255);
	drawGridLines();
	drawGridLabels();
	drawXAxisArrow();
	drawYAxisArrow();
	drawLabeledMousePosition();
	drawMarkers();
}
