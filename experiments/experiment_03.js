//Created By Rabia Alhaffar In 15/February/2020
//GRADIENTS Experiment
CreateCanvas(window.innerWidth,window.innerHeight,"black");
Initialize();
SetDrawingMode("fill");
DrawGradientRect(0,0,CanvasWidth,CanvasHeight,
    [ 
      [ 0.0,"red" ], //Color Stops Starts Here!!!
      [ 0.1,"orange" ],
      [ 0.2,"yellow" ],
      [ 0.3,"green" ],
      [ 0.4,"aqua" ],
      [ 0.5,"cyan" ],
      [ 0.6,"blue" ],
      [ 0.7,"pink" ],
      [ 0.8,"violet" ],
      [ 0.9,"purple" ],
      [ 1.0,"white" ]
    ]);
    //Gradient For Text
    var grdtxt = new LinearGradient(400,400,800,800,
        [ 
            [ 0.0,"red" ], //Color Stops Starts Here!!!
            [ 0.1,"orange" ],
            [ 0.2,"yellow" ],
            [ 0.3,"green" ],
            [ 0.4,"aqua" ],
            [ 0.5,"cyan" ],
            [ 0.6,"blue" ],
            [ 0.7,"pink" ],
            [ 0.8,"violet" ],
            [ 0.9,"purple" ],
            [ 1.0,"white" ]
          ]);
    SetFont("40px sans-serif");
    DrawText(650,600,"GRADIENTS TEXT",grdtxt.gradient,"black");