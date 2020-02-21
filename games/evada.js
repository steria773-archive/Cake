//Created By Rabia Alhaffar In 18/January/2019
//A New Game - Dude ;)
CreateCanvas(1350, 650, u,"3px black solid");
Initialize();
SetDrawingMode("fill");
var psize = 60, score = 0;
var e1 = new Square(Math.floor(Math.random() * 360), Math.floor(Math.random() * 360), 40, RED),
    e2 = new Square(Math.floor(Math.random() * 360), Math.floor(Math.random() * 360), 40, RED),
    e3 = new Square(Math.floor(Math.random() * 360), Math.floor(Math.random() * 360), 40, RED),
    e4 = new Square(Math.floor(Math.random() * 360), Math.floor(Math.random() * 360), 40, RED),
    e5 = new Square(Math.floor(Math.random() * 360), Math.floor(Math.random() * 360), 40, RED),
    e6 = new Square(Math.floor(Math.random() * 360), Math.floor(Math.random() * 360), 40, RED),
    e7 = new Square(Math.floor(Math.random() * 360), Math.floor(Math.random() * 360), 40, RED),
    e8 = new Square(Math.floor(Math.random() * 360), Math.floor(Math.random() * 360), 40, RED),
    e9 = new Square(Math.floor(Math.random() * 360), Math.floor(Math.random() * 360), 40, RED),
    e10 = new Square(Math.floor(Math.random() * 360), Math.floor(Math.random() * 360), 40, RED),
    e11 = new Square(Math.floor(Math.random() * 360), Math.floor(Math.random() * 360), 40, RED),
    e12 = new Square(Math.floor(Math.random() * 360), Math.floor(Math.random() * 360), 40, RED),
    e13 = new Square(Math.floor(Math.random() * 360), Math.floor(Math.random() * 360), 40, RED),
    e14 = new Square(Math.floor(Math.random() * 360), Math.floor(Math.random() * 360), 40, RED),
    e15 = new Square(Math.floor(Math.random() * 360), Math.floor(Math.random() * 360), 40, RED),
    e16 = new Square(Math.floor(Math.random() * 360), Math.floor(Math.random() * 360), 40, RED),
    e17 = new Square(Math.floor(Math.random() * 360), Math.floor(Math.random() * 360), 40, RED),
    e18 = new Square(Math.floor(Math.random() * 360), Math.floor(Math.random() * 360), 40, RED),
    e19 = new Square(Math.floor(Math.random() * 360), Math.floor(Math.random() * 360), 40, RED),
    e20 = new Square(Math.floor(Math.random() * 360), Math.floor(Math.random() * 360), 40, RED);
e1.Force(Math.floor(Math.random() * 20), Math.floor(Math.random() * 20));
e2.Force(Math.floor(Math.random() * 20), Math.floor(Math.random() * 20));
e3.Force(Math.floor(Math.random() * 20), Math.floor(Math.random() * 20));
e4.Force(Math.floor(Math.random() * 20), Math.floor(Math.random() * 20));
e5.Force(Math.floor(Math.random() * 20), Math.floor(Math.random() * 20));
e6.Force(Math.floor(Math.random() * 20), Math.floor(Math.random() * 20));
e7.Force(Math.floor(Math.random() * 20), Math.floor(Math.random() * 20));
e8.Force(Math.floor(Math.random() * 20), Math.floor(Math.random() * 20));
e9.Force(Math.floor(Math.random() * 20), Math.floor(Math.random() * 20));
e10.Force(Math.floor(Math.random() * 20), Math.floor(Math.random() * 20));
e11.Force(Math.floor(Math.random() * 20), Math.floor(Math.random() * 20));
e12.Force(Math.floor(Math.random() * 20), Math.floor(Math.random() * 20));
e13.Force(Math.floor(Math.random() * 20), Math.floor(Math.random() * 20));
e14.Force(Math.floor(Math.random() * 20), Math.floor(Math.random() * 20));
e15.Force(Math.floor(Math.random() * 20), Math.floor(Math.random() * 20));
e16.Force(Math.floor(Math.random() * 20), Math.floor(Math.random() * 20));
e17.Force(Math.floor(Math.random() * 20), Math.floor(Math.random() * 20));
e18.Force(Math.floor(Math.random() * 20), Math.floor(Math.random() * 20));
e19.Force(Math.floor(Math.random() * 20), Math.floor(Math.random() * 20));
e20.Force(Math.floor(Math.random() * 20), Math.floor(Math.random() * 20));
var Game = new Level(() => {
    score += 1;
    ClearCanvas();
    e1.Update();
    e2.Update();
    e3.Update();
    e4.Update();
    e5.Update();
    e6.Update();
    e7.Update();
    e8.Update();
    e9.Update();
    e10.Update();
    e11.Update();
    e12.Update();
    e13.Update();
    e14.Update();
    e15.Update();
    e16.Update();
    e17.Update();
    e18.Update();
    e19.Update();
    e20.Update();
    if (CheckCanvasCollisionRight(e1)) e1.Force(-(Math.floor(Math.random() * 20)), Math.floor(Math.random() * 20));
    if (CheckCanvasCollisionRight(e2)) e2.Force(-(Math.floor(Math.random() * 20)), Math.floor(Math.random() * 20));
    if (CheckCanvasCollisionRight(e3)) e3.Force(-(Math.floor(Math.random() * 20)), Math.floor(Math.random() * 20));
    if (CheckCanvasCollisionRight(e4)) e4.Force(-(Math.floor(Math.random() * 20)), Math.floor(Math.random() * 20));
    if (CheckCanvasCollisionRight(e5)) e5.Force(-(Math.floor(Math.random() * 20)), Math.floor(Math.random() * 20));
    if (CheckCanvasCollisionRight(e6)) e6.Force(-(Math.floor(Math.random() * 20)), Math.floor(Math.random() * 20));
    if (CheckCanvasCollisionRight(e7)) e7.Force(-(Math.floor(Math.random() * 20)), Math.floor(Math.random() * 20));
    if (CheckCanvasCollisionRight(e8)) e8.Force(-(Math.floor(Math.random() * 20)), Math.floor(Math.random() * 20));
    if (CheckCanvasCollisionRight(e9)) e9.Force(-(Math.floor(Math.random() * 20)), Math.floor(Math.random() * 20));
    if (CheckCanvasCollisionRight(e10)) e10.Force(-(Math.floor(Math.random() * 20)), Math.floor(Math.random() * 20));
    if (CheckCanvasCollisionRight(e11)) e11.Force(-(Math.floor(Math.random() * 20)), Math.floor(Math.random() * 20));
    if (CheckCanvasCollisionRight(e12)) e12.Force(-(Math.floor(Math.random() * 20)), Math.floor(Math.random() * 20));
    if (CheckCanvasCollisionRight(e13)) e13.Force(-(Math.floor(Math.random() * 20)), Math.floor(Math.random() * 20));
    if (CheckCanvasCollisionRight(e14)) e14.Force(-(Math.floor(Math.random() * 20)), Math.floor(Math.random() * 20));
    if (CheckCanvasCollisionRight(e15)) e15.Force(-(Math.floor(Math.random() * 20)), Math.floor(Math.random() * 20));
    if (CheckCanvasCollisionRight(e16)) e16.Force(-(Math.floor(Math.random() * 20)), Math.floor(Math.random() * 20));
    if (CheckCanvasCollisionRight(e17)) e17.Force(-(Math.floor(Math.random() * 20)), Math.floor(Math.random() * 20));
    if (CheckCanvasCollisionRight(e18)) e18.Force(-(Math.floor(Math.random() * 20)), Math.floor(Math.random() * 20));
    if (CheckCanvasCollisionRight(e19)) e19.Force(-(Math.floor(Math.random() * 20)), Math.floor(Math.random() * 20));
    if (CheckCanvasCollisionRight(e20)) e20.Force(-(Math.floor(Math.random() * 20)), Math.floor(Math.random() * 20));
    if (CheckCanvasCollisionLeft(e1)) e1.Force(Math.floor(Math.random() * 20)), -(Math.floor(Math.random() * 20));
    if (CheckCanvasCollisionLeft(e2)) e2.Force(Math.floor(Math.random() * 20)), -(Math.floor(Math.random() * 20));
    if (CheckCanvasCollisionLeft(e3)) e3.Force(Math.floor(Math.random() * 20)), -(Math.floor(Math.random() * 20));
    if (CheckCanvasCollisionLeft(e4)) e4.Force(Math.floor(Math.random() * 20)), -(Math.floor(Math.random() * 20));
    if (CheckCanvasCollisionLeft(e5)) e5.Force(Math.floor(Math.random() * 20)), -(Math.floor(Math.random() * 20));
    if (CheckCanvasCollisionLeft(e6)) e6.Force(Math.floor(Math.random() * 20)), -(Math.floor(Math.random() * 20));
    if (CheckCanvasCollisionLeft(e7)) e7.Force(Math.floor(Math.random() * 20)), -(Math.floor(Math.random() * 20));
    if (CheckCanvasCollisionLeft(e8)) e8.Force(Math.floor(Math.random() * 20)), -(Math.floor(Math.random() * 20));
    if (CheckCanvasCollisionLeft(e9)) e9.Force(Math.floor(Math.random() * 20)), -(Math.floor(Math.random() * 20));
    if (CheckCanvasCollisionLeft(e10)) e10.Force(Math.floor(Math.random() * 20)), -(Math.floor(Math.random() * 20)); 
    if (CheckCanvasCollisionLeft(e11)) e11.Force(Math.floor(Math.random() * 20)), -(Math.floor(Math.random() * 20)); 
    if (CheckCanvasCollisionLeft(e12)) e12.Force(Math.floor(Math.random() * 20)), -(Math.floor(Math.random() * 20)); 
    if (CheckCanvasCollisionLeft(e13)) e13.Force(Math.floor(Math.random() * 20)), -(Math.floor(Math.random() * 20)); 
    if (CheckCanvasCollisionLeft(e14)) e14.Force(Math.floor(Math.random() * 20)), -(Math.floor(Math.random() * 20)); 
    if (CheckCanvasCollisionLeft(e15)) e15.Force(Math.floor(Math.random() * 20)), -(Math.floor(Math.random() * 20)); 
    if (CheckCanvasCollisionLeft(e16)) e16.Force(Math.floor(Math.random() * 20)), -(Math.floor(Math.random() * 20)); 
    if (CheckCanvasCollisionLeft(e17)) e17.Force(Math.floor(Math.random() * 20)), -(Math.floor(Math.random() * 20)); 
    if (CheckCanvasCollisionLeft(e18)) e18.Force(Math.floor(Math.random() * 20)), -(Math.floor(Math.random() * 20)); 
    if (CheckCanvasCollisionLeft(e19)) e19.Force(Math.floor(Math.random() * 20)), -(Math.floor(Math.random() * 20)); 
    if (CheckCanvasCollisionLeft(e20)) e20.Force(Math.floor(Math.random() * 20)), -(Math.floor(Math.random() * 20)); 
    if (CheckCanvasCollisionTop(e1)) e1.Force(Math.floor(Math.random() * 20)), Math.floor(Math.random() * 20); 
    if (CheckCanvasCollisionTop(e2)) e2.Force(Math.floor(Math.random() * 20)), Math.floor(Math.random() * 20); 
    if (CheckCanvasCollisionTop(e3)) e3.Force(Math.floor(Math.random() * 20)), Math.floor(Math.random() * 20); 
    if (CheckCanvasCollisionTop(e4)) e4.Force(Math.floor(Math.random() * 20)), Math.floor(Math.random() * 20); 
    if (CheckCanvasCollisionTop(e5)) e5.Force(Math.floor(Math.random() * 20)), Math.floor(Math.random() * 20);
    if (CheckCanvasCollisionTop(e6)) e6.Force(Math.floor(Math.random() * 20)), Math.floor(Math.random() * 20); 
    if (CheckCanvasCollisionTop(e7)) e7.Force(Math.floor(Math.random() * 20)), Math.floor(Math.random() * 20); 
    if (CheckCanvasCollisionTop(e8)) e8.Force(Math.floor(Math.random() * 20)), Math.floor(Math.random() * 20); 
    if (CheckCanvasCollisionTop(e9)) e9.Force(Math.floor(Math.random() * 20)), Math.floor(Math.random() * 20); 
    if (CheckCanvasCollisionTop(e10)) e10.Force(Math.floor(Math.random() * 20)), Math.floor(Math.random() * 20); 
    if (CheckCanvasCollisionTop(e11)) e11.Force(Math.floor(Math.random() * 20)), Math.floor(Math.random() * 20); 
    if (CheckCanvasCollisionTop(e12)) e12.Force(Math.floor(Math.random() * 20)), Math.floor(Math.random() * 20); 
    if (CheckCanvasCollisionTop(e13)) e13.Force(Math.floor(Math.random() * 20)), Math.floor(Math.random() * 20); 
    if (CheckCanvasCollisionTop(e14)) e14.Force(Math.floor(Math.random() * 20)), Math.floor(Math.random() * 20); 
    if (CheckCanvasCollisionTop(e15)) e15.Force(Math.floor(Math.random() * 20)), Math.floor(Math.random() * 20); 
    if (CheckCanvasCollisionTop(e16)) e16.Force(Math.floor(Math.random() * 20)), Math.floor(Math.random() * 20); 
    if (CheckCanvasCollisionTop(e17)) e17.Force(Math.floor(Math.random() * 20)), Math.floor(Math.random() * 20); 
    if (CheckCanvasCollisionTop(e18)) e18.Force(Math.floor(Math.random() * 20)), Math.floor(Math.random() * 20); 
    if (CheckCanvasCollisionTop(e19)) e19.Force(Math.floor(Math.random() * 20)), Math.floor(Math.random() * 20); 
    if (CheckCanvasCollisionTop(e20)) e20.Force(Math.floor(Math.random() * 20)), Math.floor(Math.random() * 20); 
    if (CheckCanvasCollisionBottom(e1)) e1.Force(-(Math.floor(Math.random() * 20)), -(Math.floor(Math.random() * 20))); 
    if (CheckCanvasCollisionBottom(e2)) e2.Force(-(Math.floor(Math.random() * 20)), -(Math.floor(Math.random() * 20))); 
    if (CheckCanvasCollisionBottom(e3)) e3.Force(-(Math.floor(Math.random() * 20)), -(Math.floor(Math.random() * 20))); 
    if (CheckCanvasCollisionBottom(e4)) e4.Force(-(Math.floor(Math.random() * 20)), -(Math.floor(Math.random() * 20))); 
    if (CheckCanvasCollisionBottom(e5)) e5.Force(-(Math.floor(Math.random() * 20)), -(Math.floor(Math.random() * 20))); 
    if (CheckCanvasCollisionBottom(e6)) e6.Force(-(Math.floor(Math.random() * 20)), -(Math.floor(Math.random() * 20))); 
    if (CheckCanvasCollisionBottom(e7)) e7.Force(-(Math.floor(Math.random() * 20)), -(Math.floor(Math.random() * 20))); 
    if (CheckCanvasCollisionBottom(e8)) e8.Force(-(Math.floor(Math.random() * 20)), -(Math.floor(Math.random() * 20))); 
    if (CheckCanvasCollisionBottom(e9)) e9.Force(-(Math.floor(Math.random() * 20)), -(Math.floor(Math.random() * 20))); 
    if (CheckCanvasCollisionBottom(e10)) e10.Force(-(Math.floor(Math.random() * 20)), -(Math.floor(Math.random() * 20))); 
    if (CheckCanvasCollisionBottom(e11)) e11.Force(-(Math.floor(Math.random() * 20)), -(Math.floor(Math.random() * 20)));
    if (CheckCanvasCollisionBottom(e12)) e12.Force(-(Math.floor(Math.random() * 20)), -(Math.floor(Math.random() * 20))); 
    if (CheckCanvasCollisionBottom(e13)) e13.Force(-(Math.floor(Math.random() * 20)), -(Math.floor(Math.random() * 20))); 
    if (CheckCanvasCollisionBottom(e14)) e14.Force(-(Math.floor(Math.random() * 20)), -(Math.floor(Math.random() * 20))); 
    if (CheckCanvasCollisionBottom(e15)) e15.Force(-(Math.floor(Math.random() * 20)), -(Math.floor(Math.random() * 20)));
    if (CheckCanvasCollisionBottom(e16)) e16.Force(-(Math.floor(Math.random() * 20)), -(Math.floor(Math.random() * 20))); 
    if (CheckCanvasCollisionBottom(e17)) e17.Force(-(Math.floor(Math.random() * 20)), -(Math.floor(Math.random() * 20))); 
    if (CheckCanvasCollisionBottom(e18)) e18.Force(-(Math.floor(Math.random() * 20)), -(Math.floor(Math.random() * 20))); 
    if (CheckCanvasCollisionBottom(e19)) e19.Force(-(Math.floor(Math.random() * 20)), -(Math.floor(Math.random() * 20)));
    if (CheckCanvasCollisionBottom(e20)) e20.Force(-(Math.floor(Math.random() * 20)), -(Math.floor(Math.random() * 20)));
    cakecanvas.onmousemove = (e) => 
    {
        DrawSquare(e.clientX, e.clientY, psize, "blue");
        if (CheckCollisionRectAdvanced(e.clientX, e.clientY, psize, psize, e1.x, e1.y, e1.height, e1.width) ||
            CheckCollisionRectAdvanced(e.clientX, e.clientY, psize, psize, e2.x, e2.y, e2.height, e2.width) ||
            CheckCollisionRectAdvanced(e.clientX, e.clientY, psize, psize, e3.x, e3.y, e3.height, e3.width) ||
            CheckCollisionRectAdvanced(e.clientX, e.clientY, psize, psize, e4.x, e4.y, e4.height, e4.width) ||
            CheckCollisionRectAdvanced(e.clientX, e.clientY, psize, psize, e5.x, e5.y, e5.height, e5.width) ||
            CheckCollisionRectAdvanced(e.clientX, e.clientY, psize, psize, e6.x, e6.y, e6.height, e6.width) ||
            CheckCollisionRectAdvanced(e.clientX, e.clientY, psize, psize, e7.x, e7.y, e7.height, e7.width) ||
            CheckCollisionRectAdvanced(e.clientX, e.clientY, psize, psize, e8.x, e8.y, e8.height, e8.width) ||
            CheckCollisionRectAdvanced(e.clientX, e.clientY, psize, psize, e9.x, e9.y, e9.height, e9.width) ||
            CheckCollisionRectAdvanced(e.clientX, e.clientY, psize, psize, e10.x, e10.y, e10.height, e10.width) ||
            CheckCollisionRectAdvanced(e.clientX, e.clientY, psize, psize, e11.x, e11.y, e11.height, e11.width) ||
            CheckCollisionRectAdvanced(e.clientX, e.clientY, psize, psize, e12.x, e12.y, e12.height, e12.width) ||
            CheckCollisionRectAdvanced(e.clientX, e.clientY, psize, psize, e13.x, e13.y, e13.height, e13.width) ||
            CheckCollisionRectAdvanced(e.clientX, e.clientY, psize, psize, e14.x, e14.y, e14.height, e14.width) ||
            CheckCollisionRectAdvanced(e.clientX, e.clientY, psize, psize, e15.x, e15.y, e15.height, e15.width) ||
            CheckCollisionRectAdvanced(e.clientX, e.clientY, psize, psize, e16.x, e16.y, e16.height, e16.width) ||
            CheckCollisionRectAdvanced(e.clientX, e.clientY, psize, psize, e17.x, e17.y, e17.height, e17.width) ||
            CheckCollisionRectAdvanced(e.clientX, e.clientY, psize, psize, e18.x, e18.y, e18.height, e18.width) ||
            CheckCollisionRectAdvanced(e.clientX, e.clientY, psize, psize, e19.x, e19.y, e19.height, e19.width) ||
            CheckCollisionRectAdvanced(e.clientX, e.clientY, psize, psize, e20.x, e20.y, e20.height, e20.width)) psize--;
    };
    if(psize == 0)
    {
        Game.Pause();
        alert("Your Score Is: " + score + "\nThanks For Playing!!!");
        RestartGame();
    }
},120).Start();