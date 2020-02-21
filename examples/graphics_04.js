/*
	Copyright 2006 Google Inc.

	Licensed under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License.
	You may obtain a copy of the License at

	  http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software
	distributed under the License is distributed on an "AS IS" BASIS,
	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	See the License for the specific language governing permissions and
	limitations under the License.
*/
var count = 0;
// Init 3D components
CreateCanvas(600,600);
Initialize();
var scene = new Scene();
var space = new Space();

var Level_1 = new Level(function()
{
	canvasWidth = cakecanvas.width;
			canvasHeight = cakecanvas.height;
			halfCanvasWidth = canvasWidth * 0.5;
			halfCanvasHeight = canvasHeight * 0.5;
//Main Animation Function
function Animate()
{
ClearCanvas();
scene.camera.x = 70 * Math.sin(count += 0.001);
scene.camera.y = 70;
scene.camera.z = 70 * Math.cos(count);
scene.draw();
Level_1.Start();		
}


			// Create a box shape and add it to the scene
			scene.shapes['box'] = new Shape();
			var p = scene.shapes['box'].points; // for convenience

			p[0] = new Point(-10, -10, -10); // left  bottom front
			p[1] = new Point(10, -10, -10);  // right bottom front
			p[2] = new Point(10, 10, -10);   // right top    front
			p[3] = new Point(-10, 10, -10);  // left  top    front

			p[4] = new Point(-10, -10, 10);  // left  bottom back
			p[5] = new Point(10, -10, 10);   // right bottom back
			p[6] = new Point(10, 10, 10);    // right top    back
			p[7] = new Point(-10, 10, 10);   // left  top    back

			// Back
			scene.shapes['box'].polygons.push(new Polygon(
				[ p[0], p[1], p[2], p[3] ],
				new Point(0, 0, -1),
				true /* double-sided */,
				Polygon.SOLID,
				[255, 0, 0]
			));

			// Front
			scene.shapes['box'].polygons.push(new Polygon(
				[ p[4], p[5], p[6], p[7] ],
				new Point(0, 0, 1),
				true /* double-sided */,
				Polygon.SOLID,
				[0, 0, 255]
			));

			// Top
			scene.shapes['box'].polygons.push(new Polygon(
				[ p[2], p[3], p[7], p[6] ],
				new Point(0, 1, 0),
				false /* single-sided */,
				Polygon.WIRE,
				[0, 255, 0]
			));

			// Transparent Top
			scene.shapes['box'].polygons.push(new Polygon(
				[ p[2], p[3], p[7], p[6] ],
				new Point(0, 1, 0),
				false /* single-sided */,
				Polygon.SOLID,
				[0, 255, 0, 0.4]
			));

			// Left
			scene.shapes['box'].polygons.push(new Polygon(
				[ p[0], p[4], p[7], p[3] ],
				new Point(-1, 0, 0),
				true /* double-sided */,
				Polygon.SOLID,
				[255, 255, 0]
			));

			// Right
			scene.shapes['box'].polygons.push(new Polygon(
				[ p[1], p[5], p[6], p[2] ],
				new Point(1, 0, 0),
				true /* double-sided */,
				Polygon.SOLID,
				[0, 255, 255]
			));

			// Create a floor shape and add it to the scene
			scene.shapes['floor'] = new Shape();
			var p = scene.shapes['floor'].points; // for convenience

			p[0]  = new Point(-40, -10, -40);
			p[1]  = new Point(-40, -10,  40);
			p[2] = new Point( 40, -10,  40);
			p[3] = new Point( 40, -10, -40);

			// Floor
			scene.shapes['floor'].polygons.push(new Polygon(
				[ p[0], p[1], p[2], p[3] ],
				new Point(0, 1, 0),
				false /* single-sided */,
				Polygon.SOLID,
				[45, 45, 45]
			));
		
		
	    Animate();
},30);
Level_1.Start();