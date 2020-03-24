//CreateCanvas(width,height,background_color,border_style)
CreateCanvas(600,600,"black"); //Creating Canvas With Width Of 600,Height Of 600,Background Color Of Black
Initialize();                  //NOTES: If Canvas Index Parameter Were Not Found Or Mentioned,Default Is 0 Which Means The First Canvas In The HTML Page 
SetDrawingMode("fill");        //Setting Drawing Mode To Fill Shapes Or Things Drawn

/*
Modes Are:
"fill" For Filling Drawn Shapes
"stroke" For Drawing Shapes With No Fill Color (Stroke),With A Stroke Color
"custom" For Filling Drawn Shapes With Fill Color And Stroking Their Borders As Stroke Colors

As Of Latest Versions Of Cake,To Fill Shapes You Can Ignore Using It Cause Mode Are "fill" By Default But Can Changed Using The Same Function
*/

SetFont("40px Monospace");    //Setting Font To Monospace,With Font Size Of 40 Pixels

//Drawing Text "HELLO WORLD" At Center Of The Canvas
//DrawText(x,y,text,fill_color,stroke_color,text_alignment)
DrawText(CanvasWidth / 2,CanvasHeight / 2,"HELLO WORLD","white",u,"center"); 

/*
text_alignment Can Be:
"left" To Set Text Alignment To Left
"right" To Set Text Alignment To Right
"center" To Set Text Alignment To Center

There Are Many As They Are In CSS,But These Are Common
*/


//u Is Shorthand For undefined
//Cake Will Set undefined Values To Their Default Values