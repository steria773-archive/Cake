//Cake Physics Collision Detection Library!!!
	   var CheckCollisionRect = (r1,r2) => { return(r1.x < r2.x + r2.width && r1.x + r1.width > r2.x && r1.y < r2.y + r2.height && r1.y + r1.height > r2.y && r1.collidable && r2.collidable); };
	   var CheckCollisionRectAdvanced = (r_1_x,r_1_y,r_1_w,r_1_h,r_2_x,r_2_y,r_2_w,r_2_h) => { return(r_1_x < r_2_x + r_2_w && r_1_x + r_1_w > r_2_x && r_1_y < r_2_y + r_2_h && r_1_y + r_1_h > r_2_y); };
	   var CheckCollisionCircleAdvanced = (c_1_x,c_1_y,c_1_r,c_2_x,c_2_y,c_2_r) => { return(Math.sqrt((c_1_x - c_2_x * c_1_x - c_2_x) + (c_1_y + c_2_y * c_1_y + c_2_y)) < c_1_r + c_2_r); };
	   var CheckCollisionCircle = (c1,c2) => { return(Math.sqrt((c1.x - c2.x * c1.x - c2.x) + (c1.y + c2.y * c1.y + c2.y))  < c1.radius + c2.radius && c1.collidable && c2.collidable); };
	   var CheckCollisionCircleRectAdvanced = (c_1_x,c_1_y,c_1_r,r_1_x,r_1_y,r_1_w,r_1_h) =>
	   {
           if (Math.abs(c_1_x - r_1_x - r_1_w / 2) > (r_1_w / 2 + c_1_r) || Math.abs(c_1_y - r_1_y - r_1_h / 2) > (r_1_h / 2 + c_1_r)) { return false; }
		   if (Math.abs(c_1_x - r_1_x - r_1_w / 2) <= (r_1_w / 2) || Math.abs(c_1_y - r_1_y - r_1_h / 2) <= (r_1_h / 2)) { return true; }
           return (Math.abs(c_1_x - r_1_x - r_1_w / 2) - r_1_w / 2 * Math.abs(c_1_x - r_1_x - r_1_w / 2) - r_1_w /2 + Math.abs(c_1_y - r_1_y - r_1_h / 2) - r_1_h / 2 * Math.abs(c_1_y - r_1_y - r_1_h / 2) - r_1_h / 2 <= (c_1_r * c_1_r));  
	   };
	   var CheckCollisionCircleRect = (c1,r1) =>
	   {
           if (Math.abs(c1.x - r1.x - r1.width / 2) > (r1.width / 2 + c1.radius) || Math.abs(c1.y - r1.y - r1.height / 2) > (r1.height / 2 + c1.radius)) { return false; }
		   if (Math.abs(c1.x - r1.x - r1.width / 2) <= (r1.width / 2) || Math.abs(c1.y - r1.y - r1.height / 2) <= (r1.height / 2)) { return true; }
           return (Math.abs(c1.x - r1.x - r1.width / 2) - r1.width / 2 * Math.abs(c1.x - r1.x - r1.width / 2) - r1.width / 2 + Math.abs(c1.y - r1.y - r1.height / 2) - r1.height / 2 * Math.abs(c1.y - r1.y - r1.height / 2) - r1.height / 2 <= (c1.radius * c1.radius) && c1.collidable && c2.collidable);
       };
	   var CheckCanvasCollisionLeft = (object) => { return(object.x <= object.width * 0.5); };
	   var CheckCanvasCollisionLeftAdvanced = (o_x,o_w) => { return(o_x <= o_w * 0.5); };		
	   var CheckCanvasCollisionRight = (object) => { return(object.x + object.width >= cakecanvas.width + object.width * 0.5); };
	   var CheckCanvasCollisionRightAdvanced = (o_x,o_w) => { return(o_x + o_w >= cakecanvas.width + o_w * 0.5); };
	   var CheckCanvasCollisionTop = (object) => { return(object.y <= object.height * 0.5); };
	   var CheckCanvasCollisionTopAdvanced = (o_y,o_h) => { return(o_y <= o_h * 0.5); };
	   var CheckCanvasCollisionBottom = (object) => { return(object.y + object.height >= cakecanvas.height + object.height * 0.5); };
	   var CheckCanvasCollisionBottomAdvanced = (o_y,o_h) => { return(o_y + o_h >= cakecanvas.height + o_h * 0.5); };
	   //In Test(For Circles!!!)
	   var CheckCanvasCollisionBottomCircle = (c1) => { return(c1.y + c1.size >= cakecanvas.height); };
	   var CheckCanvasCollisionTopCircle = (c1) => { return(c1.y - c1.size <= 0); };
	   var CheckCanvasCollisionLeftCircle = (c1) => { return(c1.x + c1.size <= 0); };
	   var CheckCanvasCollisionRightCircle = (c1) => { return(c1.x + c1.size >= cakecanvas.width); };
	   var CheckCanvasCollisionBottomCircleAdvanced = (c_1_y,c_1_r) => { return(c_1_y + c_1_r >= cakecanvas.height); };
	   var CheckCanvasCollisionTopCircleAdvanced = (c_1_y,c_1_r) => { return(c_1_y - c_1_r <= 0); };
	   var CheckCanvasCollisionLeftCircleAdvanced = (c_1_x,c_1_r) => { return(c_1_x + c_1_r <= 0); };
	   var CheckCanvasCollisionRightCircleAdvanced = (c_1_x,c_1,r) => { return(c_1_x + c_1_r >= cakecanvas.width); };