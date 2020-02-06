//Created By Rabia Alhaffar In 26/December/2019
//A Fork Of Google's Space 3D For 2D Canvas Graphics Engine
//Do Not Use It For 3D If You Do Not Know What Are You Doing
/* 
Features:
1- No Dependencies Needed  
2- Works With 2D Graphics And Huge Polygonal Designs
3- Easy To Use,You Can Add Your Shaped As Code Contribution
4- Use Cake Game Framework Features Without Hassle    
    */		
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
var canvasWidth = CanvasWidth,halfCanvasWidth = CanvasWidth * 0.5,canvasHeight = CanvasHeight,halfCanvasHeight = CanvasHeight * 0.5;
		function Space() {
			this.m = createMatrixIdentity();
			this.mStack = [];
		}
		Space.prototype.createMatrixIdentity = function() {
			return [
				[1, 0, 0, 0],
				[0, 1, 0, 0],
				[0, 0, 1, 0],
				[0, 0, 0, 1]
			];
		}
		/**
		 * Multiplies two 4x4 matricies together.
		 */
		Space.prototype.matrixMultiply = function(m1, m2) {
			var result = this.createMatrixIdentity();
			var width = m1[0].length;
			var height = m1.length;
			for (var x = 0; x < width; x++) {
				for (var y = 0; y < height; y++) {
					var sum = 0;
					for (var z = 0; z < width; z++) sum += m1[y][z] * m2[z][x];
					result[y][x] = sum;
				}
			}
            return result;
		}

		/**
		 * Transforms a coordinate using the current transformation
		 * matrix, then flattens it using the projection matrix.
		 */
		Space.prototype.flatten = function(point) {
			var p = [[point.x, point.y, point.z, 1]];
			var pm = this.matrixMultiply(p, this.m);
			point.tx = pm[0][0];
			point.ty = pm[0][1];
			point.tz = pm[0][2];
			// lazy projection
			point.fx = halfCanvasWidth + (canvasWidth * point.tx / point.tz);
			point.fy = halfCanvasHeight -(canvasWidth * point.ty / point.tz);
		}
		/**
		 * Translate (move) the current transformation matrix
		 */
		Space.prototype.translate = function(x, y, z) {
			var m = [
				[1, 0, 0, 0],
				[0, 1, 0, 0],
				[0, 0, 1, 0],
				[x, y, z, 1]
			];
			this.m = this.matrixMultiply(m, this.m);
		}

		/**
		 * Rotate the current transformation matrix. Rotations are
		 * world-oriented, and occur in y,x,z order.
		 */
		Space.prototype.rotate = function(x, y, z) {
			if (y) {
				var cosY = Math.cos(y);
				var sinY = Math.sin(y);
				var rotY = [
					[cosY, 0, sinY, 0],
					[0, 1, 0, 0],
					[-sinY, 0, cosY, 0],
					[0, 0, 0, 1]
				];
				this.m = this.matrixMultiply(this.m, rotY);
			}

			if (x) {
				var cosX = Math.cos(x);
				var sinX = Math.sin(x);
				var rotX = [
					[1, 0, 0, 0],
					[0, cosX, -sinX, 0],
					[0, sinX, cosX,0],
					[0, 0, 0, 1]
				];
				this.m = this.matrixMultiply(this.m, rotX);
			}

			if (z) {
				var cosZ = Math.cos(z);
				var sinZ = Math.sin(z);
				var rotZ = [
					[cosZ, -sinZ, 0, 0],
					[sinZ, cosZ, 0, 0],
					[0, 0, 1, 0],
					[0, 0, 0, 1]
				];

				this.m = this.matrixMultiply(this.m, rotZ);
			}
		}

		/**
		 * Pushes the current transformation onto the stack
		 */
		Space.prototype.push = function() {
			this.mStack.push(this.m);
			this.m = [
				[this.m[0][0], this.m[0][1], this.m[0][2], this.m[0][3]],
				[this.m[1][0], this.m[1][1], this.m[1][2], this.m[1][3]],
				[this.m[2][0], this.m[2][1], this.m[2][2], this.m[2][3]],
				[this.m[3][0], this.m[3][1], this.m[3][2], this.m[3][3]]
			];
		}

		/**
		 * Pops the end off the transformation stack
		 */
		Space.prototype.pop = function() { this.m = this.mStack.pop(); }

		/* -------------------------------------------------------------------- */

		/**
		 * A 3d coordinate
		 */
		function Point(x, y, z) {
			this.x = x;
			this.y = y;
			this.z = z;
			// Relative to camera coordinates
			this.tx;
			this.ty;
			this.tz;
			// Flattened coordinates
			this.fx;
			this.fy;
		}
		/**
		 * A Shape is made up of polygons
		 */
		function Shape() {
			this.points = [];
			this.polygons = [];
		}
		/**
		 * Draws the shape
		 */
		Shape.prototype.draw = function(drawlist) {
			for (var i = 0; i< this.points.length; i++) space.flatten(this.points[i]);
			for (var i = 0; i< this.polygons.length; i++) {
				var poly = this.polygons[i]; // convenience
				space.flatten(poly.origin);
				// lazy backface culling
				if (poly.normal && this.backface) {
					space.flatten(poly.normal);
					var originDist = Math.pow(poly.origin.tx, 2)
												 + Math.pow(poly.origin.ty, 2)
												 + Math.pow(poly.origin.tz, 2);
					var normalDist = Math.pow(poly.normal.tx, 2)
												 + Math.pow(poly.normal.ty, 2)
												 + Math.pow(poly.normal.tz, 2);
					if(originDist > normalDist) drawlist.push(poly);
				} 
				else drawlist.push(poly);
			}
		}

		/**
		 * A polygon is a connection of points in the shape object. You
		 * should probably try to make them coplanar.
		 */
		function Polygon(points, normal, backface, type, color) {
			this.points = points;
			this.origin = new Point(0, 0, 0);
			for(var i = 0; i < this.points.length; i++) {
				this.origin.x += this.points[i].x;
				this.origin.y += this.points[i].y;
				this.origin.z += this.points[i].z;
			}
			this.origin.x /= this.points.length;
			this.origin.y /= this.points.length;
			this.origin.z /= this.points.length;
			if (normal) this.normal = new Point(this.origin.x + normal.x,this.origin.y + normal.y,this.origin.z + normal.z);
			else this.normal = null;
			this.backface = backface;
			this.type = type;
			this.color = color;
		}
		Polygon.SOLID = 0;
		Polygon.WIRE = 1;
		/**
		 * Draws the polygon. Assumes that the points have already been
		 * flattened.
		 */
		Polygon.prototype.draw = function() {
			cakepen.beginPath();
			cakepen.moveTo(this.points[0].fx, this.points[0].fy);
			for(var i = 0; i < this.points.length; i++) cakepen.lineTo(this.points[i].fx, this.points[i].fy);
			cakepen.closePath();
			var color = this.color;
			/*
			// Do lighting here
			lightvector = Math.abs(this.normal.x + this.normal.y);
			if(lightvector > 1) {
				lightvector = 1;
			}

			color[0] = (color[0] * lightvector).toString();
			color[1] = (color[1] * lightvector).toString();
			color[2] = (color[2] * lightvector).toString();
			*/
			if (color.length > 3) {
				var style = ["rgba(",
				             color[0], ",",
				             color[1], ",",
				             color[2], ",",
				             color[3], ")"].join("");
			} else {
				var style = ["rgb(",
				             color[0], ",",
				             color[1], ",",
				             color[2], ")"].join("");
			}
			if (this.type == Polygon.SOLID) {
				cakepen.fillStyle = style;
				cakepen.fill();
			} else if (this.type == Polygon.WIRE) {
				cakepen.strokeStyle = style;
				cakepen.stroke();
			}
		}

		/* -------------------------------------------------------------------- */

		/**
		 * Scene describes the 3D environment
		 */
		function Scene() {
			this.shapes = {};
			this.camera = new Point(0, 0, 0);
			this.cameraTarget = new Point(0, 0, 0);
			this.cameraRotation = 0;
			this.drawlist = [];
		}
		/**
		 * Draw the world
		 */
		Scene.prototype.draw = function() {
			space.push();
			// Camera transformation
			space.translate(
				-this.camera.x,
				-this.camera.y,
				-this.camera.z
			);
			// Camera rotation
			var xdiff = this.cameraTarget.x - this.camera.x;
			var ydiff = this.cameraTarget.y - this.camera.y;
			var zdiff = this.cameraTarget.z - this.camera.z;
			var xzdist = Math.sqrt(Math.pow(xdiff, 2) + Math.pow(zdiff, 2));
			var xrot = -Math.atan2(ydiff, xzdist); // up/down rotation
			var yrot =  Math.atan2(xdiff, zdiff);  // left/right rotation
			space.rotate(xrot, yrot, this.cameraRotation);
			// Drawing
			this.drawlist = [];
			for(var i in this.shapes) this.shapes[i].draw(this.drawlist);
			// Depth sorting (warning: this is only enough to drive this demo - feel
			// free to contribute a better system).
			this.drawlist.sort(function (poly1, poly2) {
				return poly2.origin.tz - poly1.origin.tz;
			});
			for (var i = 0; i < this.drawlist.length; i++) this.drawlist[i].draw();
			space.pop();
		}
	function createMatrixIdentity() {
    return [
      [1, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 1, 0],
	  [0, 0, 0, 1]
    ];
  }