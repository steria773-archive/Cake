//Created By Rabia Alhaffar In 22/March/2020
//A Prototype For The Next Generation Of Cake 2D Graphics (Can Be Embedded Into canvas2d.js)
//For Drawing 2D Content Faster And Easier!!!
//NOTES: This Is A Part Of canvas2d.js Which Is Very Important,Also Note That This Doesn't Replace canvas2d.js
var DrawGeometry = (content) =>
{
    if(Unknown(content.x)) content.x = 0;
    if(Unknown(content.y)) content.y = 0;
    if(Unknown(content.points)) content.points = [];
    if(Unknown(content.width)) content.width = 0;
    if(Unknown(content.height)) content.height = 0;
    if(Unknown(content.h)) content.h = content.width;
    if(Unknown(content.w)) content.w = content.height;
    if(Unknown(content.textAlign)) content.textAlign = "left";
    if(Unknown(content.radius)) content.radius = 0;
    if(Unknown(content.size)) content.size = 0;
    if(Unknown(content.gradient)) content.gradient = 0;
    if(Unknown(content.gradient.content)) content.gradient.content = [];
    if(Unknown(content.r)) content.r = 0;
    if(Unknown(content.text)) content.text = "";
    if(Unknown(content.font)) content.font = "16px monospace";
    if(Unknown(content.fill)) content.fill = "black";
    if(Unknown(content.stroke)) content.stroke = "black";
    if(Unknown(content.alpha)) content.alpha = 1;
    if(Unknown(content.type)) content.type = "rect";
    if(Unknown(content.mode)) content.mode = "fill";
    if(Unknown(content.src)) content.src = "";
    if(Unknown(content.anticlockwise)) content.anticlockwise = false;
    if(Unknown(content.startAngle)) content.startAngle = 90;
    if(Unknown(content.endAngle)) content.endAngle = 180 * Math.PI;
    if(Unknown(content.lineWidth)) content.lineWidth = 1;
    if(Unknown(content.lineHeight)) content.lineHeight = 1;
    var content_image = new Image();
    content_image.src = content.src;
    cakepen.fillStyle = content.fill;
    cakepen.strokeStyle = content.stroke;
    cakepen.globalAlpha = content.alpha;
    cakepen.font = content.font;
    cakepen.textAlign = content.textAlign;
    if(content.type == "rect")
    {
        if(content.mode == "fill") cakepen.fillRect(content.x,content.y,content.width,content.height);
        if(content.mode == "stroke") cakepen.strokeRect(content.x,content.y,content.width,content.height);
        if(content.mode == "custom")
        {
            cakepen.fillRect(content.x,content.y,content.width,content.height);
            cakepen.strokeRect(content.x,content.y,content.width,content.height);
        }
    }
    if(content.type == "square")
    {
        if(content.mode == "fill") cakepen.fillRect(content.x,content.y,content.size,content.size);
        if(content.mode == "stroke") cakepen.strokeRect(content.x,content.y,content.size,content.size);
        if(content.mode == "custom")
        {
            cakepen.fillRect(content.x,content.y,content.size,content.size);
            cakepen.strokeRect(content.x,content.y,content.size,content.size);
        }
    }
    if(content.type == "circle")
    {
        cakepen.beginPath();
        cakepen.arc(content.x,content.y,content.size,90,180 * Math.PI,content.anticlockwise);
        cakepen.closePath();
        if(content.mode == "fill") cakepen.fill();
        if(content.mode == "stroke") cakepen.stroke();
        if(content.mode == "custom") { cakepen.fill(); cakepen.stroke(); }
    }
    if(content.type == "image")
    {
        if(Unknown(content.width) || Unknown(content.height)) cakepen.drawImage(content_image,content.x,content.y);
        else cakepen.drawImage(content_image,content.x,content.y,content.width,content.height);
    }
    if(content.type == "polygon")
    {
        cakepen.beginPath();
        cakepen.moveTo(content.points[0][0],content.points[0][1]);
        for(var i = 0; i < content.points.length; i++) cakepen.lineTo(content.points[i][0],content.points[i][1]);
        cakepen.closePath();
        if(content.mode == "fill") cakepen.fill();
        if(content.mode == "stroke") cakepen.stroke();
		if(content.mode == "custom") { cakepen.fill(); cakepen.stroke(); }
    }
    if(content.type == "text")
    {
        if(content.mode == "fill") cakepen.fillText(content.text,content.x,content.y);
        if(content.mode == "stroke") cakepen.strokeText(content.text,content.x,content.y);
        if(content.mode == "custom")
        {
            cakepen.fillText(content.text,content.x,content.y);
            cakepen.strokeText(content.text,content.x,content.y);
        }
    }
    if(content.type == "line")
    {
        cakepen.beginPath();
		cakepen.moveTo(content.points[0][0],content.points[0][1]);
		cakepen.lineTo(content.points[1][0],content.points[1][1]);
        cakepen.closePath();
        cakepen.stroke();
    }
    if(content.type == "arc")
    {
        cakepen.beginPath();
		cakepen.arc(content.x, content.y, content.radius, content.startAngle, content.endAngle, content.anticlockwise);
        cakepen.closePath();
        if(content.mode == "fill") cakepen.fill();
		if(content.mode == "stroke") cakepen.stroke();		
        if(content.mode == "custom") { cakepen.stroke(); cakepen.fill(); }
    }
    if(content.type == "triangle")
    {
        cakepen.beginPath();
		cakepen.moveTo(content.points[0][0],content.points[0][1]);
        cakepen.lineTo(content.points[1][0],content.points[1][1]);
        cakepen.lineTo(content.points[2][0],content.points[2][1]);
        cakepen.lineTo(content.points[0][0],content.points[0][1]);
        cakepen.closePath();
        if(content.mode == "fill") cakepen.fill();
        if(content.mode == "stroke") cakepen.stroke();
        if(content.mode == "custom") { cakepen.stroke(); cakepen.fill(); }
    }
    if(content.type == "rounded-rect")
    {
        cakepen.beginPath();
        cakepen.moveTo(content.x + content.radius,content.y);
        cakepen.lineTo(content.x + content.width - content.radius,content.y);
        cakepen.quadraticCurveTo(content.x + content.width,content.y,content.x + content.width,content.y + content.radius);
        cakepen.lineTo(content.x + content.width,content.y + content.height - content.radius);
        cakepen.quadraticCurveTo(content.x + content.width,content.y + content.height,content.x + content.width - content.radius,content.y + content.height);
        cakepen.lineTo(content.x + content.radius,content.y + content.height);
        cakepen.quadraticCurveTo(content.x,content.y + content.height,content.x,content.y + content.height - content.radius);
        cakepen.lineTo(content.x,content.y + content.radius);
        cakepen.quadraticCurveTo(content.x,content.y,content.x + content.radius,content.y);
        cakepen.closePath();
        if(content.mode == "fill") cakepen.fill();			
        if(content.mode == "stroke") cakepen.stroke();
		if(content.mode == "custom") { cakepen.fill(); cakepen.stroke(); }
    }
    if(content.type == "linear-gradient-rect")
    {
        content.gradient = cakepen.createLinearGradient(content.x,content.y,content.width,content.height);
        for(var loopdlg = 0;loopdlg < content.gradient.content.length;loopdlg++) gradient.addColorStop(content.gradient.content[loopdlg][0], content.gradient.content[loopdlg][1]);
		if(content.mode == "fill") cakepen.fillRect(content.x,content.y,content.width,content.height);
		if(content.mode == "stroke") cakepen.strokeRect(content.x,content.y,content.width,content.height);
		if(content.mode == "custom")
		{
			cakepen.fillRect(content.x,content.y,content.width,content.height);
			cakepen.strokeRect(content.x,content.y,content.width,content.height);
		}
    }
};