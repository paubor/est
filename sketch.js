function setup() {
	createCanvas(400, 400);
}

const POINT_SIZE = 6;
const SEGMENT_LENGTH = 10;

let points = [];
let closed = false;

function pointsOverlapping(p1, p2) {
	return int(dist(p1.x, p1.y, p2.x, p2.y)) <= POINT_SIZE;
}

function drawPoints() {
	for (let i = 0; i < points.length; i += 1) {
		const currentPoint = points[i];
		fill(90);
		ellipse(currentPoint.x, currentPoint.y, POINT_SIZE, POINT_SIZE);
		if (i > 0) {
			const lastPoint = points[i - 1];
			line(lastPoint.x, lastPoint.y, currentPoint.x, currentPoint.y);
		}
	}

	if (closed) {
		const lastPoint = points[points.length - 1];
		const firstPoint = points[0];
		line(firstPoint.x, firstPoint.y, lastPoint.x, lastPoint.y);
	}
}

function drawNewPoint(){
	const newPoint = {
		x: mouseX,
		y: mouseY
	};
	fill(50);
	ellipse(newPoint.x, newPoint.y, POINT_SIZE, POINT_SIZE);
	if (!closed && points.length > 0) {
		const lastPoint = points[points.length - 1];
		line(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y);
		//draw an ellipse at half point lastPoint
  	var angle = atan2(mouseY, mouseX);
  	x = mouseX - cos(angle) * SEGMENT_LENGTH;
  	y = mouseY - sin(angle) * SEGMENT_LENGTH;
		
		push();
		translate(x, y);
		rotate(angle);
		ellipse(0,0, POINT_SIZE, POINT_SIZE);
		pop();
		
		
	}
}


function draw() {
	background(220);
	drawPoints()


	

	drawNewPoint()
	

	
}

function mouseClicked() {
	const newPoint = {
		x: mouseX,
		y: mouseY
	};
	const point = points.find(p => pointsOverlapping(p, newPoint))
	if (point) {
		console.log(points);
		console.log("Newpoint", newPoint);
		console.log("colliding", point);
		//We already have a point; meaning that the thing is closed
		closed = true;
	
	} else {
		points.push(newPoint);
	}
}

function keyTyped() {
	if (key === 'd') {
		points = [];
		closed = false;
	}
}