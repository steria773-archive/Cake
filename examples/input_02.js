const gamepad = new Gamepad();
        gamepad.on('connect', e => {
        DrawSquare(180,180,40,"red","red");    
        });
        gamepad.on('press','button_1',() => {
        DrawSquare(180,180,40,"orange","orange"); 
        });
        gamepad.on('press','button_2',() => {
        DrawSquare(180,180,40,"yellow","yellow");
        });
        gamepad.on('press','button_3',() => {
        DrawSquare(180,180,40,"green","green");
        });
        gamepad.on('press','button_4',() => {
        DrawSquare(180,180,40,"blue","blue");
        });
        gamepad.on('press','shoulder_top_left',() => {
        DrawSquare(180,180,40,"pink","pink");
        });
        gamepad.on('press','shoulder_top_right',() => {
        DrawSquare(180,180,40,"purple","purple");
        });
        CreateCanvas(400,400,"3px black solid");
        Initialize();
        SetFont("15px arial");
        SetDrawingMode("fill");
        DrawText("Press Gamepad Buttons To Change Color Of The Square!!!",200,20,"black","center");